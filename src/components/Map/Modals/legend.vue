<template>
  <q-scroll-area
    :thumb-style="thumbStyle"
    :bar-style="barStyle"
    style="min-height: 25vh; height: 15vh; min-width: 250px"
  >
    <q-expansion-item
      dense-toggle
      dense=""
      header-class="bg-grey-1 my-font text-grey-9 header-text"
      default-opened
    >
      <template v-slot:header>
        <q-checkbox
          class="q-ma-none q-pa-xs"
          size="sm"
          color="primary"
          dense
          v-model="store.layers[1].layerVisibility"
        />

        <q-item-section class="header-text">
          {{ layerNames[0] }}
        </q-item-section>
        <q-btn
          class="q-ma-none q-my-sm q-pa-sm"
          round
          dense
          outline
          size="8px"
          color="primary"
          icon="mdi-information-variant"
          @click="toolbarBenthic=true"
        />
        <q-dialog v-model="toolbarBenthic" flat>
          <info summary-text="Benthic" />
        </q-dialog>
      </template>
      <div ref="draggableContainer" id="draggable-container" class="legend">
        <div class="col q-pa-sm q-ma-none q-gutter-none" style="max-width: fit">
          <div
            class="q-gutter-xs q-pa-xs"
            v-for="(landcover, key) in legendDataBenthic"
            :key="key"
            style="min-width: 12vw"
          >
            <div
              class="my-font row justify-between q-px-sm q-my-none"
              style="font-size: 0.75rem; font-weight: normal"
            >
              <div class="col">
                <i
                  :style="
                    `background:` +
                    store.getBenthicColorMap[landcover.landcover][0]
                  "
                  class="q-px-sm q-my-xs q-mr-sm"
                  style="
                    font-size: 0.75em;
                    border: 0px outset black;
                    border-radius: 12px;
                  "
                >
                  <q-popup-proxy>
                    <colorpicker
                      :parent-color="landcover.color[0]"
                      :color-name="landcover.landcover"
                      :layer-name="layerNames[0]"
                    />
                  </q-popup-proxy> </i
                >{{ store.getBenthicColorMap[landcover.landcover][2] }}
              </div>

              <q-checkbox
                class="q-ma-none q-pa-none"
                size="24px"
                color="grey-9"
                dense
                v-model="store.benthicColorMap[landcover.landcover][3]"
              />
            </div>
          </div>
        </div>
      </div>
    </q-expansion-item>
    <q-expansion-item
      dense
      dense-toggle
      expand-separator
      default-opened
      icon=""
      :label="layerNames[1]"
      header-class="bg-grey-1 my-font text-grey-9 header-text"
    >
      <template v-slot:header>
        <q-checkbox
          class="q-ma-none q-pa-xs"
          size="sm"
          color="primary"
          dense
          v-model="store.layers[0].layerVisibility"
        />

        <q-item-section class="header-text">
          {{ layerNames[1] }}
        </q-item-section>
        <q-btn
          class="q-ma-none q-my-sm q-pa-sm"
          round
          dense
          outline
          size="8px"
          color="primary"
          icon="mdi-information-variant"
          @click="toolbarTerrestrial=true"
        />
        <q-dialog v-model="toolbarTerrestrial" flat>
          <info summary-text="Terrestrial" />
        </q-dialog>
      </template>
      <div ref="draggableContainer" id="draggable-container" class="legend">
        <div class="col q-pa-sm q-ma-none q-gutter-none" style="max-width: fit">
          <div
            class="q-gutter-xs q-pa-xs"
            v-for="(landcover, key) in legendData"
            :key="key"
            style="min-width: 12vw"
          >
            <div
              class="my-font row justify-between q-px-sm q-my-none"
              style="font-size: 0.75rem; font-weight: normal"
            >
              <div class="col">
                <i
                  :style="
                    `background:` + store.getColorMap[landcover.landcover][0]
                  "
                  class="q-px-sm q-my-xs q-mr-sm"
                  style="
                    font-size: 0.75em;
                    border: 0px outset black;
                    border-radius: 12px;
                  "
                >
                  <q-popup-proxy>
                    <colorpicker
                      :parent-color="landcover.color[0]"
                      :color-name="landcover.landcover"
                      :layer-name="layerNames[1]"
                    />
                  </q-popup-proxy> </i
                >{{ store.getColorMap[landcover.landcover][2] }}
              </div>
              <q-checkbox
                class="q-ma-none q-pa-none"
                size="24px"
                color="grey-9"
                dense
                v-model="store.colorMap[landcover.landcover][3]"
              />
            </div>
          </div>
        </div>
      </div>
    </q-expansion-item>
  </q-scroll-area>
</template>

<script>
import { useTileStore } from "../../../stores/tile_store/index.js";
import { defineComponent, ref, $refs, onMounted, computed, watch } from "vue";
import createLegend from "./setLegend.js";
import { store } from "quasar/wrappers";

export default defineComponent({
  components: {
    colorpicker: require("./colorpicker.vue").default,
    info: require("../../composables/summaries.vue").default,
  },
  setup() {
    const store = useTileStore();
    const { setLegendColors } = createLegend();
    const layerNames = ref(["Benthic Classes", "Terrestrial Classes"]);
    const legendData = ref([]);
    const legendDataBenthic = ref([]);
    const positions = ref({
      clientX: undefined,
      clientY: undefined,
      movementX: 0,
      movementY: 0,
    });
    const draggableContainer = ref(null);
    const value = ref(true);

    const getIntermediateIcon = function (val) {
      if (val !== 1) {
        return "mdi-eye-off-outline";
      } else {
        return "mdi-eye";
      }
    };

    const setOpacity = function (val) {
      if (val === 1) {
        val = 0;
      } else {
        val = 1;
      }
    };

    const setLegendData = function () {
      legendData.value = setLegendColors("burnedArea");
      legendDataBenthic.value = setLegendColors("benthicHabitat");
    };

    onMounted(() => {
      setLegendData();
      () => {
        return store.getColorMap;
      };
    });

    const dragMouseDown = function (event) {
      event.preventDefault();
      // get the mouse cursor position at startup:
      positions.value.clientX = event.clientX;
      positions.value.clientY = event.clientY;
      document.onpointermove = elementDrag;
      document.onpointerup = closeDragElement;
    };

    function elementDrag(event) {
      event.preventDefault();
      positions.value.movementX = positions.value.clientX - event.clientX;
      positions.value.movementY = positions.value.clientY - event.clientY;
      positions.value.clientX = event.clientX;
      positions.value.clientY = event.clientY;
      // set the element's new position:
      draggableContainer.value.style.top =
        draggableContainer.value.offsetTop - positions.value.movementY + "px";
      draggableContainer.value.style.left =
        draggableContainer.value.offsetLeft - positions.value.movementX + "px";
    }
    function closeDragElement() {
      document.onpointerup = null;
      document.onpointermove = null;
    }
    return {
      layerNames,
      legendData,
      legendDataBenthic,
      draggableContainer,
      dragMouseDown,
      store,
      value,
      getIntermediateIcon,
      setOpacity,
      trueval: ref(1),
      falseval: ref(0),
      toolbarBenthic: ref(false),
      toolbarTerrestrial: ref(false),
      thumbStyle: {
        right: "4px",
        borderRadius: "5px",
        backgroundColor: "#027be3",
        width: "5px",
        opacity: 0.75,
      },

      barStyle: {
        right: "2px",
        borderRadius: "9px",
        backgroundColor: "#027be3",
        width: "9px",
        opacity: 0.2,
      },
    };
  },
});
</script>

<style lang="scss">
#draggable-container {
  background: #fffffffd;
  border-radius: 10px;
  //position: absolute;
  // position: absolute;
  // bottom: 1%;
  // left: 1%;
  //max-width: fit-content;
  z-index: 3000;
  min-width: 10vw;
  // max-width: 250px;
  max-height: fit-content;
  // right: 2%;
  // bottom: 15%;
}

.header-text {
  font-size: 12px;
  font-weight: 700;
}
</style>
