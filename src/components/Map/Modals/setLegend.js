import { I18n } from "boot/i18n";
import { useTileStore } from "../../../stores/tile_store/index.js";

// Takes the color map object containing key and value pairs of landcover and their colors
function createNewColorMap(colorMap) {
  var newColorMap = {
    palette: [],
    names: [],
  };

  for (var key in colorMap) {
    if (colorMap.hasOwnProperty(key)) {
      newColorMap.palette.push(colorMap[key]);
      newColorMap.names.push(key);
    }
  }

  return newColorMap;
}

export default function createLegend() {
  var store = useTileStore();
  var colorMap = store.getColorMap;
  var benthicColorMap = store.getBenthicColorMap;

  const burnedArea = createNewColorMap(colorMap);
  const benthicHabitat = createNewColorMap(benthicColorMap);

  const makeLegend = (layer) => {
    let LegendData = [];
    for (let i = 0; i < layer.names.length; i++) {
      LegendData.push({ landcover: layer.names[i], color: layer.palette[i] });
    }
    return LegendData;
  };

  const setLegendColors = function (rasterName) {
    let legendData = [];
    switch (rasterName) {
      case "burnedArea":
        legendData = makeLegend(burnedArea);
        break;
      case "benthicHabitat":
        legendData = makeLegend(benthicHabitat);
        break;
      default:
        legendData = makeLegend(burnedArea);
    }
    return legendData;
  };

  return {
    setLegendColors,
  };
}

// Map user inputs to colors
