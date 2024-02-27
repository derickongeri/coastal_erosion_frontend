<template>
  <div>
    <div
      class="row items-center q-gutter-sm q-mt-md q-px-none q-mb-md"
      style="max-width: inherit; border-radius: 20px"
    >
      <div class="col text-grey-9 q-my-none">
        <strong> {{ $t("Shoreline Change rate m/yr") }}</strong>
      </div>
      <q-space />
      <div id="chart-btns">
        <q-btn
          unelevated
          round
          flat
          dense
          size="9px"
          :color="activeBtn[0]"
          icon="mdi-chart-donut"
          @click="changeCharttype('pie')"
        >
          <q-tooltip
            class="bg-grey-9"
            anchor="top middle"
            self="bottom middle"
            :offset="[5, 5]"
            >{{ $t("switchtopie") }}</q-tooltip
          >
        </q-btn>
        <q-btn
          style="transform: rotate(90deg)"
          unelevated
          round
          flat
          dense
          size="9px"
          :color="activeBtn[1]"
          icon="mdi-poll"
          @click="changeCharttype('bar')"
        >
          <q-tooltip
            class="bg-grey-9"
            anchor="top middle"
            self="bottom middle"
            :offset="[5, 5]"
            >{{ $t("switchtobar") }}</q-tooltip
          >
        </q-btn>
        <q-btn
          unelevated
          round
          flat
          dense
          type="submit"
          size="9px"
          color="grey-4"
          icon="crop"
          @click="exportChart"
        >
          <q-tooltip
            class="bg-grey-9"
            anchor="top middle"
            self="bottom middle"
            :offset="[5, 5]"
            >{{ $t("downloadImage") }}</q-tooltip
          >
        </q-btn>
        <q-btn
          unelevated
          round
          flat
          dense
          type="submit"
          size="9px"
          color="grey-7"
          icon="mdi-download"
          @click="exportChart"
        >
          <q-tooltip
            class="bg-grey-9"
            anchor="top middle"
            self="bottom middle"
            :offset="[5, 5]"
            >{{ $t("downloadCsv") }}
          </q-tooltip>
        </q-btn>
        <q-btn
          unelevated
          round
          flat
          dense
          size="9px"
          color="grey-7"
          icon="share"
          @click="share = true"
        >
          <q-dialog v-model="share">
            <socials />
          </q-dialog>
        </q-btn>
      </div>
    </div>

    <div class="sub-content" style="width: 100%">
      <div class="" style="min-width: 25vw">
        <barChart
          :chartData="barchartData"
          :chartOptions="barchartOptions"
          id="chart-canvas"
          ref="chartRef"
          v-if="chartType === 'bar'"
        />
      </div>

      <pieChart
        :chartData="piechartData"
        :chartOptions="piechartOptions"
        id="chart-canvas"
        ref="chartRef"
        v-if="chartType === 'pie'"
      />
    </div>

    <div>
      <q-inner-loading
        :showing="visible"
        style="background-color: #eaf0f055; backdrop-filter: blur(5px)"
        label="Fetching Statistics. This may take a while. Please wait..."
        label-class="text-teal"
        label-style="font-size: 1.1em"
        dark
      >
        <template v-slot:default>
          <q-spinner-dots size="50px" color="primary" />
          <span class="text-grey-9 text-center"
            ><b>{{ $t("computing") }}</b
            >.<br />
            {{ $t("loadingMsg") }}.<br />
            <i>{{ $t("wait") }}...</i></span
          >
        </template>
      </q-inner-loading>
    </div>
  </div>
</template>

<script>
import {
  computed,
  onBeforeMount,
  onMounted,
  onUpdated,
  provide,
  reactive,
  ref,
  watch,
} from "vue";

import { Loading, QSpinnerFacebook, QSpinnerIos, QSpinnerOval } from "quasar";
import setChartMethods from "../../../composables/chartMethods.js";
import setLayerStats from "./fetchStats";
import { useVectorStore } from "../../../stores/vector_store/index.js";
import { i18n } from "boot/i18n";

export default {
  components: {
    stackedBarChart: require("../../charts/stackedBar.vue").default,
    pieChart: require("../../charts/pieChart.vue").default,
    lineChart: require("../../charts/lineChart.vue").default,
    barChart: require("../../charts/barChart.vue").default,
    socials: require("../../socials/shareNetwork.vue").default,
  },

  setup() {
    const store = useVectorStore();
    const { stackBarChart } = setChartMethods();
    const { getRasterStats, getShorelineStats } = setLayerStats();

    const chartType = ref("bar");
    const totalArea = ref(0);
    const arealist = ref([0, 0, 0, 0]);
    const tsChartType = ref("bar-stacked");
    const selectedChartID = ref("stackedBar");
    const activeBtn = ref(["grey-7", "orange", "grey-7", "orange"]);
    const chartRef = ref(null);
    const stackedBarChartOptions = ref(stackBarChart(false));
    const stackedOption = ref(false);
    const visible = ref(false);
    const showSimulatedReturnData = ref(false);
    const barchartData = ref(getShorelineStats().barStats);
    const piechartData = ref(getShorelineStats().pieStats);
    const barchartOptions = ref({
      layout: {
        padding: 0,
      },
      responsive: true,
      maintainAspectRatio: true,
      plugins: {
        datalabels: {
          display: "auto",
          anchor: "end",
          align: "end",
          offset: 10,
          opacity: 0.9,
          formatter: (val, ctx) => {
            // Grab the label for this value
            const label = ctx.chart.data.labels[ctx.dataIndex];

            // Format the number with 2 decimal places
            const formattedVal = Intl.NumberFormat("en-US", {
              minimumFractionDigits: 1,
            }).format(val);

            // Put them together
            return `${formattedVal}`;
          },
          borderRadius: 5,
          leftborderWidth: 2,
          borderColor: ["#b71c1c", "#2e7d32", "#fff9b4"],
          color: "#404040",
          size: "11",
          backgroundColor: "#fff",
        },
        legend: {
          display: false,
          position: "bottom",
          labels: {
            font: {
              fontColor: "#EEEEEE",
            },
          },
        },
        title: {
          display: true,
          text: "Shoreline Change rates (%)",
          position: "bottom",
          color: "#9e9d24",
        },
      },
      indexAxis: "y",
      elements: {
        bar: {
          borderWidth: 0,
          inflateAmount: 0,
          borderRadius: 20,
          borderSkipped: false,
        },
      },
      scales: {
        x: {
          min: 0,
          // max: ,
          ticks: {
            callback: function (value) {
              value = value.toFixed();
              return `${value}%`;
            },
            color: "#424242",
          },
          grid: {
            color: "",
          },
        },
        y: {
          ticks: {
            color: "#424242",
            tickLength: 0,
          },
          grid: {
            color: "#9e9d24",
            borderDash: [1, 10],
            drawBorder: false,
            tickLength: 0,
            tickWidth: 0,
          },
        },
      },
    });

    const piechartOptions = ref({
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        datalabels: {
          display: "auto",
          anchor: "center",
          align: "center",
          offset: 4,
          opacity: 0.7,
          formatter: (val, ctx) => {
            // Grab the label for this value
            const label = ctx.chart.data.labels[ctx.dataIndex];

            // Format the number with 2 decimal places
            const formattedVal = Intl.NumberFormat("en-US", {
              minimumFractionDigits: 1,
            }).format(val);

            // Put them together
            return `${formattedVal}%`;
          },
          borderRadius: 5,
          leftborderWidth: 2,
          borderColor: ["#b71c1c", "#2e7d32", "#fff9b4"],
          color: "#404040",
          size: "8",
          backgroundColor: "#fff",
        },
        legend: {
          display: true,
          position: "left",
          labels: {
            font: {
              fontColor: "#EEEEEE",
            },
            usePointStyle: true,
            padding: 25,
          },
        },
        title: {
          display: false,
          align: "start",
          text: "Crop Area in Ha",
          position: "top",
          color: "#404040",
        },
      },
    });
    const selectedVector = ref(null);

    const fetchChartData = async () => {
      barchartData.value = getShorelineStats().barStats;
      piechartData.value = getShorelineStats().pieStats;
    };

    const showTextLoading = () => {
      visible.value = true;
      showSimulatedReturnData.value = false;
      fetchChartData().then(() => {
        visible.value = false;
        showSimulatedReturnData.value = true;
      });
    };

    const stackChart = function () {
      stackedOption.value = !stackedOption.value;
      stackedBarChartOptions.value = stackBarChart(stackedOption);
    };

    const changeCharttype = function (val) {
      chartType.value = val;
      chartType.value === "pie"
        ? (activeBtn.value = [
            "orange",
            "grey-7",
            activeBtn.value[2],
            activeBtn.value[3],
          ])
        : (activeBtn.value = [
            "grey-7",
            "orange",
            activeBtn.value[2],
            activeBtn.value[3],
          ]);
    };

    const switchTimeSieriesCharttype = function (val) {
      tsChartType.value = val;
      tsChartType.value === "line"
        ? (activeBtn.value = [
            activeBtn.value[0],
            activeBtn.value[1],
            "orange",
            "grey-7",
          ])
        : (activeBtn.value = [
            activeBtn.value[0],
            activeBtn.value[1],
            "grey-7",
            "orange",
          ]);
    };

    const exportChart = (val) => {
      let elementIdname = val;
      chartType.value === "pie"
        ? (elementIdname = "pie-chart")
        : (elementIdname = "bar-chart");
      let chart = document.getElementById(elementIdname).toDataURL("image/png");
      let a = document.createElement("a");
      a.href = chart;
      a.download = "image-export.png";
      a.click();
      a = null;
    };

    onMounted(() => {
      showTextLoading();
    });

    const vector = computed(() => {
      selectedVector.value = store.getselectedRegion;
      return selectedVector.value;
    });

    watch(vector, () => {
      showTextLoading();
    });

    return {
      visible,
      showSimulatedReturnData,
      value: ref(true),
      icon: ref(false),
      share: ref(false),
      activeBtn,
      chartType,
      barchartData,
      showTextLoading,
      fetchChartData,
      tsChartType,
      model: ref("2015"),
      options: ["2015", "2016", "2017", "2018", "2019"],
      changeCharttype,
      switchTimeSieriesCharttype,
      chartRef,
      selectedChartID,
      exportChart,
      stackedBarChartOptions,
      stackChart,
      piechartData,
      piechartOptions,
      barchartOptions,
      totalArea,
      arealist,
    };
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@400&family=Raleway:wght@100&display=swap");

.arrow-up {
  position: absolute;
  left: 44%;
  top: 6%;
  width: 12px;
  height: 12px;
  background: #f5f5f5;
  border-left-color: #f5f5f5;
  border-right: none;
  transform-origin: 0 0;
  transform: rotate(-45deg);
  border-bottom-color: #f5f5f5;
  box-shadow: 1px -2px 3px 0 rgb(85 85 85 / 15%);
}

.menu-card {
  background: rgba(255, 255, 255, 0);
  box-shadow: none;
}
</style>
