import { axios } from "boot/axios";
import { Loading, QSpinnerOval } from "quasar";
import { defineStore } from "pinia";

export const useVectorStore = defineStore({
  id: "vectorStore",
  state: () => ({
    regionNames: [],
    countryNames: [],
    subRegionNames: [],
    selectedRegion: "",
    slectedCountry: "",
    selectedSubregion: "",
    protectedAreaNames: [],
    slectedProtectedArea: "",
    selectedYear: 2010,
    customGeojson: null,
    datesSelected: [
      { from: "2023-01-01", to: "2023-01-31" },
      { from: "2023-02-15", to: "2023-02-23" },
    ],
    statistics: {
      labels: [
        "Regrowth, High",
        "Regrowth, Low",
        "Unburned",
        "Low Severity",
        "Moderate Severity",
        "High Severity",
        "Very High Severity",
        "NA",
      ],
      datasets: [
        {
          backgroundColor: [
            "#7a8737",
            "#acbe4d",
            "#0ae042",
            "#fff70b",
            "#ffaf38",
            "#ff641b",
            "#a41fd6",
            "#ffffff",
          ],
          data: [0, 0, 0, 0, 0, 0, 0, 0],
          barPercentage: 0.75,
          categoryPercentage: 0.75,
        },
      ],
    },
    statsVisibility: false,
  }),
  getters: {
    getRegionNames: (state) => state.regionNames,
    getselectedRegion: (state) => state.selectedRegion,
    getselectedCountry: (state) => state.slectedCountry,
    getselectedSubRegion: (state) => state.selectedSubregion,
    getselectedProtectedArea: (state) => state.selectedProtectedArea,
    getYearSelected: (state) => state.selectedYear,
    getDatesSelected: (state) => state.datesSelected,
    getStoredStats: (state) => state.statistics,
    getCustomGeojson: (state) => state.customGeojson,
    getStatsVisibility: (state) => state.statsVisibility,
  },
  actions: {
    async fetchRegionNames() {
      const { data, error } = await axios.get(
        "http://45.76.143.229/geoserver/rcmrd_coastal/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=rcmrd_coastal%3Awio_countries&maxFeatures=50&outputFormat=application%2Fjson"
      );

      const countriesArray = data.features;

      console.log(countriesArray);

      countriesArray.forEach((d) => {
        if (this.regionNames.indexOf(d.properties.NAME) === -1) {
          this.regionNames.push(d.properties.NAME);
        }
      });
    },

    async fetchProtectedAreas() {
      let isoCode = "";
      let country = this.selectedRegion;

      switch (country) {
        case "Madagascar":
          isoCode = "MDG";
          break;
        case "Comoros":
          isoCode = "COM";
          break;
        default:
          isoCode = "MUS";
          break;
      }
      let url =
        "http://45.76.143.229/geoserver/rcmrd_coastal/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=rcmrd_coastal%3AProtected_areas_IOC&maxFeatures=50&outputFormat=application%2Fjson&" +
        "CQL_FILTER=PARENT_ISO" +
        "='" +
        isoCode +
        "'";

      const { data, error } = await axios.get(url);

      const protectedAreas = data.features;

      protectedAreas.forEach((d) => {
        if (this.protectedAreaNames.indexOf(d.properties.NAME) === -1) {
          this.protectedAreaNames.push(d.properties.NAME);
        }
      });

      console.log(protectedAreas)
    },

    async fetchSubRegionNames() {
      const { data, error } = await axios.get(
        "http://45.76.143.229/geoserver/rcmrd_coastal/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=rcmrd_coastal%3AIO_Countries&maxFeatures=50&outputFormat=application%2Fjson"
      );

      this.subRegionNames = data.features;
    },

    setCustomGeometryData(layer) {
      this.customGeojson = layer;
      console.log(typeof this.customGeojson, "in store");
    },

    setDatesSelected(val) {
      this.datesSelected = val;
    },

    setRegionSelected(val) {
      this.selectedRegion = val;
      console.log(this.selectedRegion);
    },

    setSelectedProtectedArea(val) {
      this.selectedProtectedArea = val;
      console.log(this.selectedProtectedArea)
    },
    
    setCountrySelected(val) {
      this.slectedCountry = val;
    },
    setSubRegionSelected(val) {
      this.selectedSubregion = val;
    },
    setSelectedYear(val) {
      this.selectedYear = val;
      console.log(this.selectedYear);
    },

    setStats(val) {
      this.statistics = val;
    },

    setStatsVisibility(val) {
      this.statsVisibility = val;
    },
  },
});
