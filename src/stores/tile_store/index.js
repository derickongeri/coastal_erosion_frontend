import { defineStore } from "pinia";
import { useVectorStore } from "../vector_store/index.js";

const vectStore = useVectorStore();

export const useTileStore = defineStore({
  id: "tileStore",
  state: () => ({
    layers: [
      {
        layerName: "Mauritius_Landuse_reprojected",
        layerCategory: "Landuse",
        layerVisibility: false,
      },
      {
        layerName: "Mauritius_Benthic",
        layerCategory: "Benthic",
        layerVisibility: true,
      },
    ],
    colorMap: {
      Barren: ["#b35d0d", 1, "Barren", true],
      Beach: ["#e0e326", 1, "Beach", true],
      Cropland: ["#3bff29", 1, "Cropland", true],
      Forest: ["#008a65", 1, "Forest", true],
      GrasslandFinal: ["#afffb3", 1, "Grassland", true],
      Mangroves: ["#007009", 1, "Mangroves", true],
      RiverCreek: ["#9deaff", 1, "Rivers and Creeks", true],
      Road: ["#d61fcd", 1, "Road", true],
      Settlement: ["#cf02a3", 1, "Built-up Area", true],
      Stony: ["#000000", 1, "Rocky Shore", true],
      Wetland: ["#43dac6", 1, "Wetland", true],
    },
    benthicColorMap: {
      CoralReefFinal: ["#fbd376", 1, "Reef and Back reef", true],
      DeepwatersFinal: ["#06306E", 1, "Deep sea", true],
      DenseCoralFinal: ["#DA8488", 1, "Dense Coral and Algae", true],
      //SandFinal: ["#FCE936", 1, "Sand", true],
      SeagrassSeaweedFinal: ["#97E86E", 1, "Seagrass bed", true],
      SedimentFinal: ["#EDE732", 1, "Seabed sediment", true],
      SparseCorSgSwFinal: ["#FFD282", 1, "Sparse Coral/Seagrass/seaweed", true],
    },
  }),
  getters: {
    getColorMap: (state) => state.colorMap,
    getBenthicColorMap: (state) => state.benthicColorMap,
    getLayers: (state) => state.layers,
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
    updateLayerNames() {
      const array = this.layers;
      const prefix = vectStore.getselectedRegion;
      const updatedArray = array.map((item) => {
        const newName = item.layerName.replace(/^[^_]+/, prefix);
        return { ...item, layerName: newName };
      });

      console.log(updatedArray.length);

      this.layers = updatedArray;
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
