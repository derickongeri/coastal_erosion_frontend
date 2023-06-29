<template>
  <q-btn
    class="q-ma-none q-my-sm q-pa-sm"
    round
    dense
    outline
    size="8px"
    color="primary"
    icon="mdi-information-variant"
    @click="toolbar = true"
  />
  <q-dialog v-model="toolbar" flat>
    <div class="col" style="max-width: 35vw">
      <q-card flat class="row" style="border-radius: 20px">
        <q-toolbar>
          <q-toolbar-title> Title</q-toolbar-title>
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
          <p v-for="n in 15" :key="n">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
            repellendus sit voluptate voluptas eveniet porro. Rerum blanditiis
            perferendis totam, ea at omnis vel numquam exercitationem aut, natus
            minima, porro labore.
          </p>
        </q-card-section>
      </q-card>
    </div>
  </q-dialog>
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
  setup() {
    return {
      toolbar: ref(false),
    };
  },
};
</script>

<style lang="scss">
/* width */
::-webkit-scrollbar {width: 7px;}

/* Track */
::-webkit-scrollbar-track {background: #f1f1f100;}

/* Handle */
::-webkit-scrollbar-thumb {background: #3a7cb9;border-radius: 20px;padding: 2px;}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {background: #555;}
</style>
