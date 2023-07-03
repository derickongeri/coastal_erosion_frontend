<template>
  <!-- <q-btn
    class="q-ma-none q-my-sm q-pa-sm"
    round
    dense
    outline
    size="8px"
    color="primary"
    icon="mdi-information-variant"
    @click="toolbar = true"
  /> -->
  <!-- <q-dialog v-model="toolbar" flat> -->
  <div class="col my-font" style="max-width: 35vw" :text="summaryText">
    <q-card flat class="row" style="border-radius: 20px">
      <q-toolbar>
        <div class="q-pa-none q-ma-none">
          <h6 class="q-px-md q-ma-none" style="font-weight: 700">
            {{ summaryText }} Cover Classification
          </h6>
        </div>
        <q-space />
        <q-btn
          class="nav-btn2"
          flat
          round
          dense
          color="grey-1"
          icon="close"
          v-close-popup
        />
      </q-toolbar>

      <q-card-section style="max-height: 50vh" class="scroll">
        <div v-for="(classitem, key) in classList" :key="key">
          <q-item>
            <q-item-section>
              <q-item-label style="font-weight: 700">{{
                classitem.titleText
              }}</q-item-label>
              <q-item-label>{{ classitem.summaryText }}</q-item-label>
            </q-item-section>
          </q-item>
        </div>
      </q-card-section>
    </q-card>
  </div>
  <!-- </q-dialog> -->
</template>

<script>
import { ref } from "vue";

export default {
  props: {
    summaryText: {
      type: String,
      require: true,
    },
  },
  setup(props) {
    const classList = ref([]);

    const createSummaryText = (val) => {
      val = props.summaryText;
      switch (val) {
        case "Terrestrial":
          return [
            {
              titleText: "Barren land",
              summaryText:
                "An arid landscape devoid of vegetation, with few plants and no practically trees",
            },
            {
              titleText: "Built-up Area",
              summaryText:
                "Composed of areas of intensive use with much of the land covered by structures including buildings, recreational spaces, and amenities",
            },
            {
              titleText: "Cropland",
              summaryText:
                "Land used to produce adapted crops, including sugarcane, for harvest",
            },
            {
              titleText: "Forest",
              summaryText: "Densely wooded area primarily covered with trees",
            },
            {
              titleText: "Grassland",
              summaryText:
                "Area in which the vegetation is dominated by a nearly continuous cover of grasses",
            },
            {
              titleText: "Mangrove",
              summaryText:
                "Shrub or tree that grows mainly in coastal saline or brackish water",
            },
            {
              titleText: "Rocky Shore",
              summaryText:
                "Intertidal area of seacoasts where solid rock predominates",
            },

            {
              titleText: "Sand",
              summaryText:
                "Form of aragonite sand particles originating from bioerosion of limestone skeletal material of marine organisms",
            },
            {
              titleText: "Wetland",
              summaryText:
                "Transitional area between terrestrial and aquatic systems covered with swamp or marsh",
            },
            {
              titleText: "Rivers and Creeks",
              summaryText: "Natural systems channeling the flow of water",
            },
            {
              titleText: "Road",
              summaryText:
                "Stretch with a smoothed or paved surface and includes motorway, primary, secondary, and tertiary roads",
            },
          ];
        case "Benthic":
          return [
            {
              titleText: "Dense Coral and Algae",
              summaryText:
                "Area predominantly characterized by the presence of coral and algal species",
            },
            {
              titleText: "Reef and Back reef",
              summaryText:
                "Underwater ecosystem characterized by reef-building corals and coralline algae as dominant ecosystems",
            },
            {
              titleText: "Seabed sediment",
              summaryText:
                "Composed of either rock, rubble, sand, or a mixture of these in varying quantities",
            },
            {
              titleText: "Sparse coral, seaweed, seagrass on sand",
              summaryText:
                "Presence of corals, seagrass, or seaweed on sand in relatively low abundance",
            },
            {
              titleText: "Deep sea",
              summaryText:
                "Region of the ocean environment characterized by relatively deep waters of greater than 2 meters",
            },
            {
              titleText: "Seagrass bed",
              summaryText:
                "Underwater ecosystem in shallow coastal waters and in the brackish waters of estuaries characterized by flowering plants with stems and long green, grass-like leaves",
            },
          ];

        default:
          return [];
      }
    };

    classList.value = createSummaryText(props.summaryText);

    return {
      toolbar: ref(false),
      classList,
    };
  },
};
</script>

<style lang="scss">
/* width */
::-webkit-scrollbar {
  width: 7px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f100;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #3a7cb9;
  border-radius: 20px;
  padding: 2px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style>
