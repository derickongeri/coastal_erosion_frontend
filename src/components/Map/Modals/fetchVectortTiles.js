import { useTileStore } from "../../../stores/tile_store/index";

export default function loadVectorLayers() {
  const tileStore = useTileStore();

  const getVectorTiles = function (layers) {
    const vectorTiles = [];

    layers.forEach(function (layer) {
      const baseUrl = "http://45.76.143.229";
      const workspace = layer.workspace;
      const layerName = layer.layerName;
      const epsg = layer.epsg;
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

        switch (layer.layerName) {
          case "Mauritius_Benthic":
            colorMap = tileStore.getBenthicColorMap;
            break;
          case "Mauritius_Landuse_reprojected":
            colorMap = tileStore.getColorMap;
            break;
          default:
            colorMap = tileStore.getColorMap;
        }

        //var colorMap = tileStore.getColorMap; // Map user inputs to colors

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
        };
      }

      const vectorLayer = L.vectorGrid.protobuf(vectorLayerUrl, {
        rendererFactory: L.canvas.tile,
        interactive: true,
        maxNativeZoom: 17,
        minZoom: 4,
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

  return {
    getVectorTiles,
  };
}
