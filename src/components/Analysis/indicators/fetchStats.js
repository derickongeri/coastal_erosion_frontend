import { Notify } from "quasar";
import { useVectorStore } from "../../../stores/vector_store/index.js";
import { api, baseURL, axios } from "src/boot/axios";
import setSelectedVect from "../../Map/Modals/fetchVectors";

export default function setLayerStats() {
  const { selectedVect } = setSelectedVect();
  const store = useVectorStore();

  const getRasterStats = async function () {
    try {
      let layerStats = null;
      let classes = [];
      let area = [];
      let color = [];
      let statsObj = {};

      await selectedVect();

      //console.log(store.customGeojson, 'fetchRaster')
      let params = {
        geometry: store.customGeojson.toString(),
        dates: store.datesSelected,
      };

      //store.setStats(null);
      if (process.env.DEV) console.log(params);

      const response = await api.post(`${baseURL}api/stats`, params, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (process.env.DEV) console.log(response.data);
      layerStats = response.data.stats;

      const createStatsObj = (classname, area_ha, classColor) => {
        classes.push(classname);
        area.push(area_ha);
        color.push(classColor);
      };

      for (let i = 0; i < layerStats.length; i++) {
        createStatsObj(
          layerStats[i].Class,
          layerStats[i].Hectares,
          layerStats[i].color
        );
      }

      statsObj = {
        labels: classes,
        data: area,
        palette: color,
      };

      console.log(statsObj);

      // store.setStats(statsObj).then(() => {
      //   store.setStatsVisibility(true)
      // });

      return statsObj;
    } catch (error) {
      Notify.create({
        message: `${error} Error fetching chart!`,
        color: "red",
      });
    }
  };

  const getTerrestrialStats = function () {
    let country = store.getselectedRegion;
    const terrestrialLabels = [
      "Barren",
      "Beach",
      "Cropland",
      "Forest",
      "Grassland",
      "Mangrove",
      "River Creeks",
      "Settlement",
      "Stony",
      "Wetland",
    ];
    const bgColors = [
      "#b35d0d",
      "#e0e326",
      "#3bff29",
      "#008a65",
      "#afffb3",
      "#007009",
      "#9deaff",
      "#d61fcd",
      "#000000",
      "#43dac6",
    ];

    const countryData = {
      Mauritius: [
        15133900, 3890900, 92507300, 328435600, 201601800, 3665200, 10180900,
        165854700, 2086500, 6275900,
      ],
      Comoros: [
        39499300, 14268300, 1478000, 1204621700, 212855800, 1310600, 3162000,
        51207700, 51637300, 10203400,
      ],
      Seychelles: [
        2825200, 861200, 858200, 192516600, 18239400, 324300, 492900, 21567600,
        6697700, 87500,
      ],
      Madagascar: [
        2535402845, 428262989.1, 120734738.2, 10879819091, 6296336928,
        2379131636, 28113703.6, 186566742.2, 1239901.603, 1199449172,
      ],
    };

    const setBarChartData = (data) => ({
      labels: terrestrialLabels,
      datasets: [
        {
          backgroundColor: bgColors,
          data: data.map((value) => value * 0.001),
          barPercentage: 0.75,
          categoryPercentage: 0.75,
        },
      ],
    });

    const getPieChart = (data) => ({
      labels: terrestrialLabels,
      datasets: [
        {
          backgroundColor: bgColors,
          borderColor: "rgba(0, 0, 0, 0)",
          borderRadius: 5,
          borderWidth: 0,
          spacing: 0,
          cutout: "75",
          radius: "80%",
          data: data.map((value) => value * 0.001),
        },
      ],
    });

    const terrestrialStats = setBarChartData(
      countryData[country] || countryData.Mauritius
    );
    const terrestrialPieChart = getPieChart(
      countryData[country] || countryData.Mauritius
    );

    return { barStats: terrestrialStats, pieStats: terrestrialPieChart };
  };

  const getBenthicStats = function () {
    let country = store.getselectedRegion;
    const benthicLabels = [
      "Coral Reef",
      "Dense Coral",
      "Sand",
      "Seagrass",
      "Seagrass/Seaweed",
      "Sediment",
      "Sparse Coral/Seagrass",
    ];
    const bgColors = [
      "#fbd376",
      "#DA8488",
      "#c5c5c5",
      "#2E8B57",
      "#499c00",
      "#EDE732",
      "#5bff66",
    ];

    const countryData = {
      Comoros: [
        23052672.6, 52901531.94, 0, 0, 58279258.83, 42614797.94, 306964751,
      ],
      Mauritius: [
        29891609.63, 27128408.74, 3605401.162, 0, 57073418.4, 68994622.24,
        72724223.44,
      ],
      Seychelles: [
        8146551.313, 15441076.34, 0, 14019932.5, 0, 40308543.48, 138202463.4,
      ],
      Madagascar: [
        956449554.2, 833627864.8, 1059719157, 830205412.7, 0, 7173467103,
        1291682252,
      ],
    };

    const setBarChartData = (data) => ({
      labels: benthicLabels,
      datasets: [
        {
          backgroundColor: bgColors,
          data: data.map((value) => value * 0.001),
          barPercentage: 0.75,
          categoryPercentage: 0.75,
        },
      ],
    });

    const getPieChart = (data) => ({
      labels: benthicLabels,
      datasets: [
        {
          backgroundColor: bgColors,
          borderColor: "rgba(0, 0, 0, 0)",
          borderRadius: 5,
          borderWidth: 2,
          spacing: 0,
          cutout: "0",
          radius: "80%",
          data: data.map((value) => value * 0.001),
        },
      ],
    });

    const benthicStats = setBarChartData(
      countryData[country] || countryData.Mauritius
    );
    const benthicPieChart = getPieChart(
      countryData[country] || countryData.Mauritius
    );

    return { barStats: benthicStats, pieStats: benthicPieChart };
  };

  const getShorelineStats = function () {
    let country = store.getselectedRegion;
    const shorelineChangeRateLabels = [
      "High Erosion",
      "Moderate Erosion",
      "Low Change",
      "Moderate Accretion",
      "High Accretion",
    ];
    const bgColors = ["#E14A24", "#FCBF10", "#F6EB13", "#00B04F", "#29ADE3"];

    const countryData = {
      Comoros: [6083, 26115, 28199, 3588, 7226],
      Madagascar: [168501, 197376, 314494, 65859, 60081],
      Mauritius: [8985, 514, 20930, 5649, 659],
      Seychelles: [2882, 3148, 3245, 1375, 1796],
    };

    function calculatePercentages(originalList) {
      // Calculate the total sum of values in the original list
      const total = originalList.reduce((sum, value) => sum + value, 0);

      // Calculate the percentages and create a new list
      const percentagesList = originalList.map(
        (value) => ((value / total) * 100).toFixed(2)
      );

      return percentagesList;
    }

    const setBarChartData = (data) => ({
      labels: shorelineChangeRateLabels,
      datasets: [
        {
          backgroundColor: bgColors,
          data: calculatePercentages(data),
          barPercentage: 0.75,
          categoryPercentage: 0.75,
        },
      ],
    });

    const getPieChart = (data) => ({
      labels: shorelineChangeRateLabels,
      datasets: [
        {
          backgroundColor: bgColors,
          borderColor: "rgba(0, 0, 0, 0)",
          borderRadius: 5,
          borderWidth: 0,
          spacing: 0,
          cutout: "75",
          radius: "80%",
          data: calculatePercentages(data),
        },
      ],
    });

    const shorelineChangeRateStats = setBarChartData(
      countryData[country] || countryData.Mauritius
    );
    const shorelineChangeRatePieChart = getPieChart(
      countryData[country] || countryData.Mauritius
    );

    return {
      barStats: shorelineChangeRateStats,
      pieStats: shorelineChangeRatePieChart,
    };
  };

  return {
    getRasterStats,
    getTerrestrialStats,
    getBenthicStats,
    getShorelineStats,
  };
}
