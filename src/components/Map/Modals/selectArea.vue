<template>
  <div class="q-pa-md q-mx-md" style="max-width: 35vw">
    <q-card
      class="my-card"
      flat
      style="border-radius: 20px; background-color: #00000050"
    >
      <q-tabs v-model="tab" dense align="justify" class="text-grey-1">
        <q-tab no-caps label="Mapped Areas" name="one" />
        <q-tab no-caps label="Marine Proteted Areas" name="two" />
        <q-tab no-caps label="Custom Areas" name="three" />
      </q-tabs>

      <q-separator />

      <q-tab-panels
        class="text-grey-1"
        v-model="tab"
        animated
        style="background-color: #00000000"
      >
        <q-tab-panel name="one">
          <q-select
            style="min-width: 15vw"
            class="q-pl-sm q-pr-sm q-py-xs"
            dense
            standout="bg-accent text-grey-9"
            bottom-slots
            hide-dropdown-icon
            clear-icon="mdi-close"
            color="grey-1"
            input-class="input-option"
            options-selected-class="text-primary"
            popup-content-class="selection-options"
            v-model="selectedRegion"
            :options="filterOptions"
            @filter="filterFn1"
            @update:model-value="getselectedRegion"
          >
            <template v-slot:prepend>
              <q-icon
                size="xs"
                color="grey-1"
                name="mdi-map-marker"
                @click.stop
              />
            </template>
            <template v-slot:append>
              <q-icon color="grey-1" name="arrow_drop_down" @click.stop />
            </template>
            <template v-slot:selected>
              <template v-if="selectedRegion">
                <div
                  style="font-size: 1em"
                  class="selection-content q-px-none text-grey-1"
                >
                  {{ selectedRegion }}
                </div>
              </template>
              <template v-else>
                <div
                  style="font-size: 1em"
                  class="selection-content text-grey-1"
                >
                  Select Region
                </div>
              </template>
            </template>
          </q-select>
        </q-tab-panel>

        <q-tab-panel name="two">
          <q-select
            style="min-width: 15vw"
            class="q-pl-sm q-pr-sm q-py-xs"
            dense
            standout="bg-grey-2 text-grey-1"
            bottom-slots
            hide-dropdown-icon
            clear-icon="mdi-close"
            color="grey-1"
            input-class="input-option"
            options-selected-class="text-green-7"
            popup-content-class="selection-options"
            v-model="selectedRegion"
            :options="filterOptions"
            @filter="filterFn1"
            @update:model-value="getselectedRegion"
          >
            <template v-slot:prepend>
              <q-icon
                size="xs"
                color="grey-1"
                name="mdi-map-marker"
                @click.stop
              />
            </template>
            <template v-slot:append>
              <q-icon color="grey-1" name="arrow_drop_down" @click.stop />
            </template>
            <template v-slot:selected>
              <template v-if="selectedRegion">
                <div
                  style="font-size: 1em"
                  class="selection-content q-px-none text-grey-1"
                >
                  {{ selectedRegion }}
                </div>
              </template>
              <template v-else>
                <div
                  style="font-size: 1em"
                  class="selection-content text-grey-1"
                >
                  Select Region
                </div>
              </template>
            </template>
          </q-select>
        </q-tab-panel>

        <q-tab-panel class="items-center" name="three">
          <div class="text-center q-mx-lg">
            <q-btn
              class=""
              no-caps
              size="md"
              outline
              rounded
              dense
              color="grey-4"
              label="Upload a GeoJSON or KML file"
              icon="mdi-tray-arrow-up"
              @click="toggleDrawingTools"/>
          </div>
          <div class="text-center q-mx-lg">
            or
          </div>
          <div class="text-center q-mx-lg">
            Use the drawing tool
            <q-btn
              class="bg-white"
              size="sm"
              round
              dense
              flat
              color="grey-7"
              icon="mdi-selection-drag"
              @click="toggleDrawingTools"
              >
            </q-btn>
            in the map tools on the right to create areas
          </div>
        </q-tab-panel>
      </q-tab-panels>
    </q-card>
  </div>
</template>

<script>
import {
  ref,
  computed,
  onMounted,
  onUnmounted,
  defineComponent,
  watch,
} from "vue";
import { useVectorStore } from "src/stores/vector_store/index.js";

export default defineComponent({
  components: {
    indicatorSelector: require("../../composables/indicatorSelection.vue")
      .default,
  },
  setup() {
    const store = useVectorStore();

    const selection = ref(true),
      filterOptions = ref([]),
      selectedRegion = ref(store.getselectedRegion);

    const regionNameOptions = computed(() => {
      let regionList = [];
      let regionName = store.regionNames;

      regionName.map((d) => {
        regionList.push(d);
      });
      return regionList.sort();
    });

    const filterFn1 = function (val, update) {
      update(() => {
        if (val === "") {
          filterOptions.value = regionNameOptions.value;
        } else {
          const needle = val.toLowerCase();
          filterOptions.value = regionNameOptions.value.filter(
            (v) => v.toLowerCase().indexOf(needle) > -1
          );
        }
      });
    };

    onMounted(() => {
      store.fetchRegionNames();
      store.setRegionSelected("Mauritius");
    });

    const getselectedRegion = function (val) {
      val = selectedRegion.value;
      store.setRegionSelected(val);
    };

    const fillSelection = computed(() => {
      return store.getselectedRegion;
    });

    watch(fillSelection, () => {
      selectedRegion.value = store.getselectedRegion;
    });

    return {
      selection,
      filterOptions,
      filterFn1,
      selectedRegion,
      getselectedRegion,
      tab: ref("one"),
    };
  },
});
</script>

<style>
.selection-options::-webkit-scrollbar {
  width: 2px; /* width of the entire scrollbar */
  min-height: 200px;
}

.selection-options::-webkit-scrollbar-track {
  background: rgb(255, 166, 0, 0.1); /* color of the tracking area */
}

.selection-options::-webkit-scrollbar-thumb {
  background-color: rgb(219, 250, 43); /* color of the scroll thumb */
  border-radius: 20px; /* roundness of the scroll thumb */
  border: 3px solid rgba(255, 166, 0, 0); /* creates padding around scroll thumb */
}

.input-option {
  color: white;
  font-size: 2em;
  /* height: fit-content; */
  /*max-width: 300px;*/
}
.selected-option {
  color: white;
}

.selection-options {
  max-height: 350px;
}

.selection-content {
  font-size: 1em;
  max-width: 250px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

/* .q-field__marginal {
  height: 56px;
  color: rgb(255 255 255);
  font-size: 24px;
} */
</style>
