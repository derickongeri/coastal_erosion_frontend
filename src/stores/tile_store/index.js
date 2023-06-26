import { axios } from "boot/axios";
import { Loading, QSpinnerOval } from "quasar";
import { defineStore } from "pinia";

export const useTileStore = defineStore({
  id: "tileStore",
  state: () => ({
    layers: [
      {
        workspace: "rcmrd_coastal",
        layerName: "Mauritius_Landuse_reprojected",
        epsg: "900913",
      },
      {
        workspace: "rcmrd_coastal",
        layerName: "Mauritius_Benthic",
        epsg: "900913",
      },
    ],
    colorMap: {
      Barren: ["#b35d0d", 1],
      Beach: ["#e0e326", 1],
      Cropland: ["#3bff29", 1],
      Forest: ["#008a65", 1],
      GrasslandFinal: ["#afffb3", 1],
      Mangroves: ["#007009", 1],
      RiverCreek: ["#9deaff", 1],
      Road: ["#d61fcd", 1],
      Settlement: ["#cf02a3", 1],
      Stony: ["#000000", 1],
      Wetland: ["#43dac6", 1],
    },
    benthicColorMap: {
      CoralReefFinal: ["#fbd376", 1, "Coral Reef"],
      DeepwatersFinal: ["#06306E", 1, "Deepwaters"],
      DenseCoralFinal: ["#DA8488", 1, "Dense Coral"],
      SandFinal: ["#FCE936", 1, "Sand"],
      SeagrassSeaweedFinal: ["#97E86E", 1, "Seagrass/Seaweed"],
      SedimentFinal: ["#EDE732", 1, "Sediment"],
      SparseCorSgSwFinal: ["#FFD282", 1, "Sparse Coral"],
    },
  }),
  getters: {
    getColorMap: (state) => state.colorMap,
    getBenthicColorMap: (state) => state.benthicColorMap,
  },
  actions: {
    updateSettlementColor(newColor, opacity, name, layer) {
      let colorMap = {};
      switch (layer) {
        case "Benthic Classes":
          colorMap = this.benthicColorMap;
          colorMap[name][0] = newColor
          colorMap[name][1] = opacity;
          this.benthicColorMap = colorMap
          break;
        case "Terrestrial Classes":
          colorMap = this.colorMap;
          colorMap[name][0] = newColor;
          colorMap[name][1] = opacity;

          // Perform any additional actions or API calls if needed

          // Update the state with the modified colorMap
          this.colorMap = colorMap;
          break;
        default:
          colorMap = this.colorMap;
      }
    },
  },
});


// Get the colorMap object from the state
      // //const colorMap = this.colorMap;
      // console.log(name);

      // // Get the key and value pairs of the Settlement in the colorMap
      // const settlementColor = colorMap[name];

      // console.log(settlementColor);

      // Set a new color for the Settlement
      // colorMap[name][0] = newColor;
      // colorMap[name][1] = opacity;

      // // Perform any additional actions or API calls if needed

      // // Update the state with the modified colorMap
      // this.colorMap = colorMap;
