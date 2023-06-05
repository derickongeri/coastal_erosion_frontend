import { I18n } from "boot/i18n";


export default function createLegend() {
  const burnedArea = {
    palette: [
      "#cf673b",
      "#668438",
      "#9bcc4f",
      "#b19c3a",
      "#ffffbe",
      "#dadac7",
    ],
    names: [
      "Dense Coral",
      "Reef/Back reef",
      "Seabed sediments",
      "Sparse coaral on sand",
      "Deep water",
      "Seagrass bed",
    ]
  }

  const makeLegend = (layer) => {
    let LegendData = []
    for (let i = 0; i < layer.names.length; i++){
      LegendData.push({landcover: layer.names[i], color: layer.palette[i]})
    }
    return LegendData
  };

  const setLegendColors = function (rasterName) {
    let legendData = [];
    switch (rasterName) {
      case "burnedArea":
        legendData = makeLegend(burnedArea)
        break;
      default:
        legendData = makeLegend(burnedArea)
    }
    return legendData;
  };

  return {
    setLegendColors,
  };
}
