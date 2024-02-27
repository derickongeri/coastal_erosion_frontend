import { useTileStore } from "../../../stores/tile_store/index";

export default function loadVectorLayers() {
  const tileStore = useTileStore();

  const getVectorTiles = function (layers) {
    const vectorTiles = [];

    layers.forEach(function (layer) {
      const baseUrl = "http://217.21.122.249";
      const workspace = "cogeos";
      const layerName = layer.layerName;
      const epsg = "900913";
      const format = "application/x-protobuf;type=mapbox-vector";

      const vectorLayerUrl =
        baseUrl +
        "/geoserver/gwc/service/tms/1.0.0/" +
        workspace +
        ":" +
        layerName +
        "@EPSG%3A" +
        epsg +
        "@pbf/{z}/{x}/{-y}.pbf";

      function getStyle(layerValue) {
        var fillColor = "#cf02a3"; // Default fill color
        var fillOpacity = 1;

        let colorMap = {};

        switch (layer.layerCategory) {
          case "Benthic":
            colorMap = tileStore.getBenthicColorMap;
            break;
          case "Landuse":
            colorMap = tileStore.getColorMap;
            break;
          case "shorelineChangeRate":
            colorMap = tileStore.getShorelineColorMap;
            break;
          case "shorelineChangeArea":
            colorMap = tileStore.getShorelineAreaColorMap;
            break;
          default:
            colorMap = tileStore.getShorelineColorMap;
        }
        // Check if the layerValue exists in the colorMap

        if (layerValue in colorMap) {
          fillColor = colorMap[layerValue][0];
          fillOpacity = colorMap[layerValue][1];
        }

        return {
          weight: 0,
          fillColor: fillColor,
          fillOpacity: fillOpacity,
          fill: true,
          radius: 2,
        };
      }

      const vectorLayer = L.vectorGrid.protobuf(vectorLayerUrl, {
        rendererFactory: L.svg.tile,
        interactive: true,
        maxNativeZoom: 17,
        minZoom: 4,
        // filter: `INTERSECTS(the_geom, collectGeometries(queryCollection('rcmrd_coastal:Protected_areas_IOC', 'the_geom', 'WDPA_PID = ''9154''')))`,
        vectorTileLayerStyles: {
          [layerName]: (properties) => {
            return getStyle(properties.layer);
          },
        },
      });

      vectorTiles.push(vectorLayer);
    });

    return vectorTiles;
  };

  const getShorelineData = async function (layerName, layerstyle) {
    const baseUrl = "http://217.21.122.249";
    const workspace = "cogeos";
    const epsg = "900913";
    const format = "application/x-protobuf;type=mapbox-vector";

    const vectorLayerUrl =
      baseUrl +
      "/geoserver/gwc/service/tms/1.0.0/" +
      workspace +
      ":" +
      layerName +
      "@EPSG%3A" +
      epsg +
      "@pbf/{z}/{x}/{-y}.pbf";

    const vectorTile = L.vectorGrid.protobuf(vectorLayerUrl, {
      rendererFactory: L.svg.tile,
      interactive: true,
      maxNativeZoom: 17,
      minZoom: 4,
      vectorTileLayerStyles: {
        [layerName]: (properties) => {
          return getStyle(properties.layer);
        },
      },
    });


  };

  return {
    getVectorTiles,
  };
}
