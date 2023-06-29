import { axios } from "boot/axios";
import { Loading, QSpinnerOval } from "quasar";
import { defineStore } from "pinia";

export const useTileStore = defineStore({
  id: "tileStore",
  state: () => ({
    layers: [
      {
        layerName: "Mauritius_Landuse_reprojected",
        layerVisibility: true
      },
      {
        layerName: "Mauritius_Benthic",
        layerVisibility: true
      },
    ],
    colorMap: {
      Barren: ["#b35d0d", 1, "Barren", true],
      Beach: ["#e0e326", 1, "Beach", true],
      Cropland: ["#3bff29", 1, 'Cropland', true],
      Forest: ["#008a65", 1, 'Forest', true],
      GrasslandFinal: ["#afffb3", 1, 'Grassland', true],
      Mangroves: ["#007009", 1, "Mangroves", true],
      RiverCreek: ["#9deaff", 1, "RverCreek", true],
      Road: ["#d61fcd", 1, "Road", true],
      Settlement: ["#cf02a3", 1, "Settlement", true],
      Stony: ["#000000", 1, "Stony", true],
      Wetland: ["#43dac6", 1, "Wetland", true],
    },
    benthicColorMap: {
      CoralReefFinal: ["#fbd376", 1, "Coral Reef", true],
      DeepwatersFinal: ["#06306E", 1, "Deepwaters", true],
      DenseCoralFinal: ["#DA8488", 1, "Dense Coral", true],
      SandFinal: ["#FCE936", 1, "Sand", true],
      SeagrassSeaweedFinal: ["#97E86E", 1, "Seagrass/Seaweed", true],
      SedimentFinal: ["#EDE732", 1, "Sediment", true],
      SparseCorSgSwFinal: ["#FFD282", 1, "Sparse Coral/Seagrass/seaweed", true],
    },
  }),
  getters: {
    getColorMap: (state) => state.colorMap,
    getBenthicColorMap: (state) => state.benthicColorMap,
    getLayers: (state) => state.layers
  },
  actions: {
    updateSettlementColor(newColor, opacity, name, layer) {
      let colorMap = {};
      switch (layer) {
        case "Benthic Classes":
          colorMap = this.benthicColorMap;
          colorMap[name][0] = newColor;
          colorMap[name][1] = opacity;
          this.benthicColorMap = colorMap;
          break;
        case "Terrestrial Classes":
          colorMap = this.colorMap;
          colorMap[name][0] = newColor;
          colorMap[name][1] = opacity;
          console.log("opacity", opacity);
          // Perform any additional actions or API calls if needed

          // Update the state with the modified colorMap
          this.colorMap = colorMap;
          break;
        default:
          colorMap = this.colorMap;
          colorMap[name][0] = newColor;
          colorMap[name][1] = opacity;
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
