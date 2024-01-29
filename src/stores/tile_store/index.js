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
      {
        layerName: "Mauritius_shoreline_change_rate_2017_2019",
        layerCategory: "shorelineChangeRate",
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
      SeagrassSeaweedFinal: ["#97E86E", 1, "Seagrass bed", true],
      SedimentFinal: ["#EDE732", 1, "Seabed sediment", true],
      SparseCorSgSwFinal: ["#FFD282", 1, "Sparse Coral/Seagrass/seaweed", true],
    },
    shorelineColorMap: {
      highRetreate: ["#ED2024", 1, "< -2m/yr", true],
      moderateRetreate: ["#FCBF10", 1, "-2 to -1m/yr", true],
      lowChange: ["#F6EB13", 1, "-1 to 1m/yr", true],
      moderateErosion: ["#00B04F", 1, "1 to 2m/yr", true],
      highErosion: ["#29ADE3", 1, "> 2m/yr", true],
    },
    shorelineAreaColorMap: {
      growth: ["#ED2024", 1, "Growth", true],
      retreat: ["#00B04F", 1, "Retreat", true],
    }
  }),
  getters: {
    getColorMap: (state) => state.colorMap,
    getBenthicColorMap: (state) => state.benthicColorMap,
    getShorelineColorMap: (state) => state.shorelineColorMap,
    getShorelineAreaColorMap: (state) => state.shorelineAreaColorMap,
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

/*

<?xml version="1.0" encoding="UTF-8"?>
<StyledLayerDescriptor xmlns="http://www.opengis.net/sld" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" version="1.1.0" xsi:schemaLocation="http://www.opengis.net/sld http://schemas.opengis.net/sld/1.1.0/StyledLayerDescriptor.xsd" xmlns:se="http://www.opengis.net/se" xmlns:ogc="http://www.opengis.net/ogc">
  <NamedLayer>
    <Name>Mauritius_Benthic_2023</Name>
    <UserStyle>
      <Name>Mauritius_Benthic_2023</Name>
      <FeatureTypeStyle>
        <Rule>
          <Name>CoralReef</Name>

            <Title>CoralReef</Title>

          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>layer</ogc:PropertyName>
              <ogc:Literal>CoralReef</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <PolygonSymbolizer>
            <Fill>
              <CssParameter name="fill">#fbd376</CssParameter>
            </Fill>
          </PolygonSymbolizer>
        </Rule>
        <Rule>
          <Name>DenseCoral</Name>

            <Title>DenseCoral</Title>

          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>layer</ogc:PropertyName>
              <ogc:Literal>DenseCoral</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <PolygonSymbolizer>
            <Fill>
              <CssParameter name="fill">#da8488</CssParameter>
            </Fill>
          </PolygonSymbolizer>
        </Rule>
        <Rule>
          <Name>Sand</Name>

            <Title>Sand</Title>

          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>layer</ogc:PropertyName>
              <ogc:Literal>Sand</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <PolygonSymbolizer>
            <Fill>
              <CssParameter name="fill">#e0e326</CssParameter>
            </Fill>
          </PolygonSymbolizer>
        </Rule>
        <Rule>
          <Name>SeagrassSeaweed</Name>

            <Title>SeagrassSeaweed</Title>

          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>layer</ogc:PropertyName>
              <ogc:Literal>SeagrassSeaweed</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <PolygonSymbolizer>
            <Fill>
              <CssParameter name="fill">#97e86e</CssParameter>
            </Fill>
          </PolygonSymbolizer>
        </Rule>
        <Rule>
          <Name>Sediment</Name>

            <Title>Sediment</Title>

          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>layer</ogc:PropertyName>
              <ogc:Literal>Sediment</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <PolygonSymbolizer>
            <Fill>
              <CssParameter name="fill">#ede732</CssParameter>
            </Fill>
          </PolygonSymbolizer>
        </Rule>
        <Rule>
          <Name>SparseCrSgSw</Name>

            <Title>SparseCrSgSw</Title>

          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:PropertyIsEqualTo>
              <ogc:PropertyName>layer</ogc:PropertyName>
              <ogc:Literal>SparseCrSgSw</ogc:Literal>
            </ogc:PropertyIsEqualTo>
          </ogc:Filter>
          <PolygonSymbolizer>
            <Fill>
              <CssParameter name="fill">#ffd282</CssParameter>
            </Fill>
          </PolygonSymbolizer>
        </Rule>
        <Rule>
          <Name></Name>

            <Title>layer is ''</Title>

          <ogc:Filter xmlns:ogc="http://www.opengis.net/ogc">
            <ogc:Or>
              <ogc:PropertyIsEqualTo>
                <ogc:PropertyName>layer</ogc:PropertyName>
                <ogc:Literal></ogc:Literal>
              </ogc:PropertyIsEqualTo>
              <ogc:PropertyIsNull>
                <ogc:PropertyName>layer</ogc:PropertyName>
              </ogc:PropertyIsNull>
            </ogc:Or>
          </ogc:Filter>
          <PolygonSymbolizer>
            <Fill>
              <CssParameter name="fill">#ae2fdc</CssParameter>
            </Fill>
            <Stroke>
              <CssParameter name="stroke">#232323</CssParameter>
              <CssParameter name="stroke-width">1</CssParameter>
              <CssParameter name="stroke-linejoin">bevel</CssParameter>
            </Stroke>
          </PolygonSymbolizer>
        </Rule>
      </FeatureTypeStyle>

*/
