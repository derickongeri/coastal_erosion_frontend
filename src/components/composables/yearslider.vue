<template>
  <div class="q-px-lg q-pt-md q-pb-xl">
    <q-slider
      class="q-mt-xl text-light-blue-3"
      v-model="firstModel"
      color="primary"
      label-always
      markers
      selection-color="transparent"
      track-color="light-blue-2"
      marker-labels
      :min="2015"
      :max="2023"
      :inner-min="2015"
      :inner-max="2023"
    >
      <template v-slot:marker-label-group="scope">
        <div
          v-for="marker in scope.markerList"
          :key="marker.index"
          :class="[ `text-deep-orange-${2 + Math.ceil(marker.value / 2) }`, marker.classes ]"
          :style="marker.style"
          @click="model = marker.value"
        >{{ marker.value }}</div>
      </template>
    </q-slider>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  setup () {
    return {
      firstModel: ref(2015),
      secondModel: ref(3),
      thirdModel: ref(3.5)
    }
  }
}
</script>
