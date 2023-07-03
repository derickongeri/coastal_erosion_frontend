<template>
  <div>
    <div
      v-if="matchMediaDesktop"
      class="q-ma-none web-veiw"
      style="position: relative; min-height: 100%; width: 45%"
    >
      <q-scroll-area
        ref="stackedCards"
        class="stacked-cards q-ma-none q-pa-none"
        :thumb-style="thumbStyle"
        :bar-style="barStyle"
        style="
          position: relative;
          height: 65vh;
          width: 35vw;
          border-radius: 20px;
        "
      >
        <q-card
          flat
          bordered
          :class="{ expanded: cards[0].expanded }"
          class="card1 q-mx-md q-my-sm q-py-sm"
          style="border-radius: 20px"
        >
          <q-card-section class="" style="">
            <div class="row items-center" style="font-weight: 400; font-size: 21px">
              <div>{{ store.selectedRegion }} Benthic Classes</div>
              <q-space />
              <div>
                <label class="switch">
                  <input type="checkbox" v-model="tileStore.layers[1].layerVisibility"/>
                  <span class="slider round"></span>
                </label>
              </div>
            </div>
            <benthicAnalysis />
          </q-card-section>
        </q-card>

        <q-card
          flat
          bordered
          class="card q-mx-md q-my-none"
          :class="{ expanded: cards[1].expanded }"
          @click="toggleCard(cards[2])"
          style="border-radius: 20px"
        >
          <q-card-section class="" style="">
            <div
              class="row items-center"
              style="font-weight: 400; font-size: 21px"
            >
              <div>Geomorphology</div>
              <q-space />
              <div>
                <label class="switch">
                  <input type="checkbox" />
                  <span class="slider round"></span>
                </label>
              </div>
            </div>
            <terrestrialAnalysis />
          </q-card-section>
        </q-card>

        <q-card
          flat
          bordered
          class="card q-mx-md q-my-sm"
          :class="{ expanded: cards[2].expanded }"
          @click="toggleCard(cards[2])"
          style="border-radius: 20px"
        >
          <q-card-section class="card-content q-pa-md q-ma-sm" style="">
            <!-- <Analysis /> -->
          </q-card-section>
        </q-card>
      </q-scroll-area>
    </div>

    <div v-if="matchMediaMobile" class="bg-white mobile-veiw">
      <q-scroll-area
        class="q-ma-none q-pa-none"
        :thumb-style="thumbStyle"
        :bar-style="barStyle"
        style="position: relative; height: 50vh; width: 100vw"
      >
        <q-card flat bordered class="q-ma-sm">
          <q-card-section>
            <!-- <Analysis /> -->
          </q-card-section>
        </q-card>
      </q-scroll-area>
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

import { useVectorStore } from "../../stores/vector_store/index.js";
import { useTileStore } from "../../stores/tile_store/index.js"

export default {
  components: {
    benthicAnalysis: require("../Analysis/indicators/benthicStats.vue").default,
    terrestrialAnalysis: require("../Analysis/indicators/terrestrialStats.vue").default,
  },

  setup() {
    const store = useVectorStore();
    const tileStore = useTileStore();
    const selectedArea = ref(store.getselectedRegion);
    const fireperiod = ref(store.getDatesSelected);

    const showAnalysismobile = ref(false);
    const matchMediaMobile = ref(false);
    const matchMediaDesktop = ref(true);

    const cards = ref([
      { content: "Card 1", expanded: false },
      { content: "Card 2", expanded: false },
      { content: "Card 3", expanded: false },
    ]);

    const hideAnalysismobile = function (val) {
      showAnalysismobile.value = !showAnalysismobile.value;
    };

    onBeforeMount(() => {
      matchMediaMobile.value = window.matchMedia("(max-width: 768px)").matches;
      matchMediaDesktop.value = window.matchMedia("(min-width: 768px)").matches;
      console.log(matchMediaDesktop.value, matchMediaMobile.value);
    });

    const toggleCard = (card) => {
      if (!card.expanded) {
        cards.value.forEach((c) => {
          c.expanded = false;
        });
      }
      card.expanded = !card.expanded;
    };

    watch(store.selectedRegion, () => {
      selectedArea.value = store.getselectedRegion
    })



    onMounted(()=>{
      selectedArea.value = store.getselectedRegion
    })

    return {
      thumbStyle: {
        right: "4px",
        borderRadius: "5px",
        backgroundColor: "#027be300",
        width: "4px",
        opacity: 0.75,
      },

      barStyle: {
        right: "2px",
        borderRadius: "9px",
        backgroundColor: "#027be300",
        width: "9px",
        opacity: 0.2,
      },
      showAnalysismobile,
      hideAnalysismobile,
      matchMediaMobile,
      matchMediaDesktop,
      selectedArea,
      fireperiod,
      cards,
      toggleCard,
      value: ref(true),
      store,
      tileStore
    };
  },
};
</script>

<style lang="scss">
.mobile-veiw {
  position: relative;
  top: 20%;
  min-height: 90%;
  width: 100%;
}

.stacked-cards {
  display: flex;
  flex-direction: column;
  gap: 10px;
  // height: 300px; /* Adjust the height as needed */
  overflow: hidden;
}

// .stacked-cards {
//   position: relative;
//   height: 300px; /* Adjust the height as needed */
//   overflow: hidden;
// }

.card {
  // background-color: lightgray;
  border-radius: 4px;
  padding: 10px;
  transition: transform 0.3s;
  cursor: pointer;
}

.card1 {
  height: 100%;
  padding: 10px;
  transition: transform 0.3s;
  cursor: pointer;
}

.card.expanded {
  transform: translateY(-88.5%);
}

.card1.card.expanded {
  transform: translateY(0%);
}

.card-preview {
  height: 0.5%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* The switch - the box around the slider */
.switch {
  position: relative;
  display: inline-block;
  width: 56px;
  height: 30px;
}

/* Hide default HTML checkbox */
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

/* The slider */
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #cccccc00;
  border: solid 1px #addaff;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 21px;
  width: 21px;
  left: 4px;
  bottom: 4px;
  background-color: #4ba8f3d0;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

input:checked + .slider {
  background-color: #4ba8f3d0;
}

// input:focus + .slider {
//   box-shadow: 0 0 1px #2196f3;
// }

input:checked + .slider:before {
  background-color: #ffffff;
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 30px;
}

.slider.round:before {
  border-radius: 50%;
}

@media screen and (max-width: 768px) {
  .web-veiw {
    display: none;
  }
}

@media screen and (min-width: 768px) {
  .mobile-veiw {
    display: none;
  }
}
</style>
