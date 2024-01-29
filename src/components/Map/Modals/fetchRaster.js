import { useVectorStore } from "../../../stores/vector_store/index.js";
import { axios } from "src/boot/axios";

export default function setSelectedRaster() {
  const store = useVectorStore();

  const getRasterLayer = async function () {
    //await selectedVect()
    let eeLayer = null;
    let layerList = [];

    //console.log(store.customGeojson, 'fetchRaster')
    let params = {
      geometry: store.customGeojson.toString(),
      dates: store.datesSelected,
    };

    const response = await axios.post(
      "http://78.141.234.158:3000/api/mapid",
      params,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    //console.log(response.data)

    const mapidList = response.data.tileList.reverse();

    //const mapidList = ["projects/earthengine-legacy/maps/873c0b5937d2adb49736554cc966df9a-b1d87d2ce20709815373b413dfeb270a","projects/earthengine-legacy/maps/416c60ec75e3c993e5aeb5f460ffa9d8-3b236b8f4e3ad110962c77c4a41eca79"]
    //console.log(response.data)

    const createTileLayer = (mapidIndex, mapid) => {
      eeLayer = L.tileLayer(
        `https://earthengine.googleapis.com/v1alpha/${mapid}/tiles/{z}/{x}/{y}`,
        {
          //layers: `${mapid}`,
          transparent: true,
          crs: L.CRS.EPSG4326,
          format: "image/png",
          attribution: "google earth engine",
          zIndex: mapidIndex + 2,
        }
      );

      layerList.push(eeLayer);
    };

    for (let i = 0; i < mapidList.length; i++) {
      createTileLayer(i, mapidList[i]);
    }
    return layerList;
  };

  const fetchWMSLayers = async function () {
    // Construct the WKT geometry string and encode it
    const wktGeometry = "POLYGON ((57.69397880183624 -20.072109214137228, 57.69397880183624 -20.09146761177516, 57.71166189757105 -20.09146761177516, 57.71166189757105 -20.072109214137228, 57.69397880183624 -20.072109214137228))";
    const encodedWktGeometry = encodeURIComponent(wktGeometry);

    // Construct the request URL with the encoded WKT geometry as the filter parameter
    const geoserverUrl = "http://45.76.143.229/geoserver/rcmrd_coastal";
    const layerName = "rcmrd_coastal%3AMauritius_Benthic_Grids";
    const filter = `<Filter><Intersects><PropertyName>the_geom</PropertyName><Literal>${encodedWktGeometry}</Literal></Intersects></Filter>`;
    const requestUrl = `${geoserverUrl}?service=WMS&version=1.1.0&request=GetMap&layers=${layerName}&outputFormat=application/json&cql_filter=${filter}`;

    // Use the request URL to fetch the data from GeoServer
    fetch(requestUrl)
      .then((response) => response.json())
      .then((data) => {
        // Process the data as needed
      })
      .catch((error) => {
        // Handle any errors
      });
  };

  return {
    getRasterLayer,
  };
}
