import { useVectorStore } from "../../../stores/vector_store/index.js";
import { axios } from "src/boot/axios";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

export default function setSelectedRaster() {
  const store = useVectorStore();
  //let country = store.getselectedRegion;

  const getRasterLayer = async function (layerName, styleName) {
    return L.tileLayer.wms("http://217.21.122.249/geoserver/cogeos/wms", {
      layers: `cogeos:${layerName}`,
      format: "image/png",
      transparent: true,
      // opacity: 1,
      // tilematrixSet: "EPSG:4326",
      styles: `cogeos:${styleName}`,
      crs: L.CRS.EPSG4326,
    });
  };

  const getTerrestrialCover = async function () {
    const region = store.getselectedRegion;
    return getRasterLayer(`${region}_Terrestrial`, `Terrestrial`);
  };

  // Get Benthic cover maps with an exception for Madagascar Styling
  const getBenthicCover = async function () {
    const region = store.getselectedRegion;
    const style = region === "Madagascar" ? `${region}_Benthic` : `Benthic`;
    return getRasterLayer(`${region}_Benthic`, style);
  };

  // Get shoreline change data
  const getShorelineChange = async function () {
    const region = store.getselectedRegion;
    const wfsURL =
      "http://217.21.122.249/geoserver/cogeos/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=cogeos%3AMauritius_shoreline_change_rates_2017_2022&outputFormat=application%2Fjson";

    let response = await axios.get(wfsURL);

    let vectLayer = response.data;

    const layer = L.geoJSON([vectLayer], {
      style: function (feature) {
        const changerate = feature.properties.layer;
        const latlng = [feature.geometry.coordinates[1], feature.geometry.coordinates[0]]
        let radius = 28;
        if (changerate === 'lowChange') {
          return L.circleMarker(latlng, {
            radius: radius,
            fillOpacity: 0,
            color: "#FF0000", // Example color for < -2m/yr
          });
        } else if (changerate === 'moderateRe') {
          return L.circleMarker(latlng, {
            radius: radius,
            fillOpacity: 0,
            color: "#FFA500", // Example color for -2 to -1m/yr
          });
        } else {
          return {
            fillOpacity: 0,
            weight: 0,
            color: "#0000FF", // Example color for > 2m/yr
          };
        }
      },
    });

    return layer;
  };

  return {
    getRasterLayer,
    getTerrestrialCover,
    getBenthicCover,
    //getShorelineChange,
  };
}
