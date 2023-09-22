<template>
  <q-page padding class="q-pa-none scrollbar-hidden" style="overflow: hidden">
    <div
      class="row justify-center jumbotron page-tint"
      id="hero"
      style="min-height: 65vh; min-width: 100%"
    >
      <div class="column justify-around" style="min-height: 70%">
        <div class="row justify-center">
          <div
            class="head-text my-font text-center text-white q-pa-md q-pt-xl"
            style="font-weight: 700; background: none; max-width: 60%"
          >
            {{ $t("tagline") }}
          </div>
        </div>
        <div class="row justify-center">
          <!-- <div class="row justify-center text-white" style="font-weight:700; font-size:21px;width:100%">Choose an Application to Launch</div> -->
          <div class="text-center q-pa-md q-gutter-md" style="min-width: 400px">
            <q-btn
              rounded
              size="lg"
              text-color="white"
              style="background-color: #036a61"
              :label="$t('forest')"
              to="apps/dashboard"
            />
          </div>
        </div>
      </div>
    </div>
    <div
      style="min-width: 100%; background-color: #03406a"
      class="row justify-center q-pa-none q-ma-none"
    >
      <div
        class="col justify-around q-pa-none q-ma-none"
        style="min-height: 70%; max-width: 90%"
      >
        <div
          class="my-font text-justify text-grey-4 q-px-md q-pt-xl"
          style="font-weight: 700; font-size: 30px"
        >
          Discover Geomorphic and Shoreline Data
        </div>
        <div
          class="my-font text text-grey-4 q-px-md q-pt-xs"
          style="font-weight: 400; font-size: 18px"
        >
          <p>
            With global habitat maps, a bleaching monitoring system, turbidity
            detection, and the entire suite of Allen Coral Atlas data features
            created to support informed management of your reefs.
          </p>
        </div>
        <div class="row q-py-lg q-mb-lg">
          <div class="col q-ma-md">
            <q-card class="my-card">
              <q-img src="~/src/assets/benthic.png">
                <!-- <div class="absolute-bottom text-h6">Title</div> -->
              </q-img>

              <q-card-section
                class="text-grey-1"
                style="background-color: #036a61"
              >
                With global habitat maps, a bleaching monitoring system,
                turbidity detection, and the entire suite of Allen Coral Atlas
                data features created to support informed management of your
                reefs.
              </q-card-section>
            </q-card>
          </div>
          <div class="col q-ma-md">
            <q-card class="my-card">
              <q-img src="~/src/assets/terrestrial.png">
                <!-- <div class="absolute-bottom text-h6">Title</div> -->
              </q-img>

              <q-card-section
                class="text-grey-1"
                style="background-color: #036a61"
              >
                With global habitat maps, a bleaching monitoring system,
                turbidity detection, and the entire suite of Allen Coral Atlas
                data features created to support informed management of your
                reefs.
              </q-card-section>
            </q-card>
          </div>
          <div class="col q-ma-md">
            <q-card class="my-card">
              <q-img src="https://cdn.quasar.dev/img/parallax2.jpg">
                <!-- <div class="absolute-bottom text-h6">Title</div> -->
              </q-img>

              <q-card-section
                class="text-grey-1"
                style="background-color: #036a61"
              >
                With global habitat maps, a bleaching monitoring system,
                turbidity detection, and the entire suite of Allen Coral Atlas
                data features created to support informed management of your
                reefs.
              </q-card-section>
            </q-card>
          </div>
        </div>
      </div>
    </div>
    <div
      style="min-width: 10vw; min-height: 70vh"
      class="row justify-center q-pa-none q-ma-none page-tint"
      id="about"
    >
      <div
        class="col justify-around q-pa-none q-ma-none"
        style="min-height: 70%; max-width: 90%"
      >
        <div
          class="my-font text-center text-grey-4 q-px-md q-pt-xl"
          style="font-weight: 700; font-size: 30px"
        >
          About Us
        </div>
        <div class="row q-py-lg q-mb-lg">
          <div class="col q-ma-xl">
            <q-video
              src="https://www.youtube.com/embed/g-gz1ZiPXkI?si=5grVleFNA5xb6gr9"
              :ratio="16 / 9"
            />
          </div>
          <div class="col q-ma-xl">
            <q-card
              flat
              class="my-card text-grey-2 text-justify"
              style="background-color: #0f1b24a8; border-radius: 15px"
            >
              <q-card-section style="font-weight: 400; font-size: 18px">
                <P>
                  The Global Monitoring for Environment and Security and Africa
                  (GMES & Africa) Support Programme is the result of the
                  longstanding cooperation between Africa and Europe in the area
                  of space science & technology, which is one of the key
                  priorities of the long-term EU-Africa Joint Strategy. GMES &
                  Africa Support Programme is administered by the African Union
                  Commission through the Human Resource, Science and Technology
                  (HRST) Commission and supported by a technical assistance team
                  lead by GAF AG.</P
                >

                <P
                  >The programme aims at improving African policy-makers’,
                  planners’, scientists’, business and private sector and
                  citizens’ capacities to design, implement, and monitor
                  national, regional and continental policies and to promote
                  sustainable management of natural resources through the use of
                  Earth Observation data and derived information.</P
                >
              </q-card-section>
            </q-card>
          </div>
        </div>
      </div>
    </div>
    <div
      style="min-width: 100%; min-height: 45vh; background-color: #032135"
      class="row justify-center q-pa-none q-ma-none"
    >
      <div
        class="column justify-center q-pa-none q-ma-none"
        style="min-height: 70%; max-width: 90%"
      >
        <div class="row items-center q-pa-sm" style="">
          <div
            class="col-8 my-font text-justify text-grey-4 q-px-none q-py-xl"
            style="font-size: 21px; font-weight: 700"
          >
            Stay informed about coastal wonders. Subscribe now for exclusive
            updates on geomorphology, shoreline change, and environmental
            conservation.
          </div>
          <div class="col-4 text-center">
            <q-btn
              style="background-color: #036a61"
              size="lg"
              class="q-px-xl"
              text-color="white"
              label="Sign Up"
            />
          </div>
        </div>
      </div>
    </div>
    <div
      style="min-width: 10vw; min-height: 45vh"
      class="row justify-center q-pa-none q-ma-none page-tint"
      id="blog"
    >
      <div
        class="column justify-center q-pa-none"
        style="min-width: 100vw; min-height: 45vh"
      >
        <q-carousel
          style="min-width: 100vw; min-height: 45vh"
          animated
          v-model="slide"
          navigation
          infinite
          :autoplay="autoplay"
          arrows
          transition-prev="slide-right"
          transition-next="slide-left"
          @mouseenter="autoplay = false"
          @mouseleave="autoplay = true"
        >
          <q-carousel-slide
            :name="1"
            img-src="~/src/assets/comoros.png"
            class="column no-wrap flex-center q-pa-none q-ma-none"
          >
            <div
              class="row justify-center"
              style="min-width: 100vw; background-color: #036a6171"
            >
              <div
                class="q-my-md text-justify text-white"
                style="max-width: 25vw"
              >
                <div class="q-pa-md" style="font-weight: 700; font-size: 21px">
                  Stay informed about coastal wonders
                </div>
                <div class="q-px-md q-pb-md">
                  Stay informed about coastal wonders. Subscribe now for
                  exclusive updates on geomorphology, shoreline change, and
                  environmental conservation.
                </div>
              </div>
            </div></q-carousel-slide
          >
          <q-carousel-slide :name="2" img-src="~/src/assets/comoros.png" />
          <q-carousel-slide
            :name="3"
            img-src="https://cdn.quasar.dev/img/parallax2.jpg"
          />
          <q-carousel-slide
            :name="4"
            img-src="https://cdn.quasar.dev/img/quasar.jpg"
          />
        </q-carousel>
      </div>
    </div>
    <div
      style="min-width: 100%; min-height: 30vh; background-color: #03406a"
      class="row justify-center q-pa-none q-ma-none"
    >
      <div
        class="column justify-center q-pa-none"
        style="max-width: 90vw; min-height: 100%"
      >
        <div class="row q-my-lg">
          <div class="col q-ma-md">
            <q-card class="my-card">
              <q-card-section
                class="text-grey-1"
                style="background-color: #036a61"
              >
                With global habitat maps, a bleaching monitoring system,
                turbidity detection, and the entire suite of Allen Coral Atlas
                data features created to support informed management of your
                reefs.
              </q-card-section>
            </q-card>
          </div>
          <q-separator vertical color="grey-7" />
          <div class="col q-ma-md" style="min-width: 25vw">
            <div class="column items-center">
            <div
              class="q-my-none text-justify text-white"
              style="max-width: 25vw"
            >
              <div class="q-pa-md" style="font-weight: 700; font-size: 21px">
                Make your contribution
              </div>
              <div class="q-px-md q-pb-md">
                Stay informed about coastal wonders. Subscribe now for
              </div>
              <div class="row justify-left q-gutter-lg items-left">
                <q-btn
                  round
                  flat
                  color="grey-3"
                  size="lg"
                  icon="mdi-facebook"
                  @click="facebook"
                />
                <q-btn
                  round
                  flat
                  color="grey-3"
                  size="lg"
                  icon="mdi-linkedin"
                  @click="linkedin"
                />
                <q-btn
                  round
                  flat
                  color="grey-3"
                  size="lg"
                  icon="mdi-twitter"
                  @click="twitter"
                />
                <q-btn
                  round
                  flat
                  color="grey-3"
                  size="lg"
                  icon="mdi-content-copy"
                  @click="clipboard"
                />
              </div>
            </div>
          </div>
          </div>
          <q-separator vertical color="grey-7" />
          <div class="col items-center q-ma-md" style="min-width: 25vw">
            <div class="column items-center">
              <div
                class="q-my-none text-justify text-white"
                style="max-width: 15vw"
              >
                <div class="q-pa-md" style="font-weight: 700; font-size: 21px">
                  Make your contribution
                </div>
                <div class="q-px-md q-pb-md">
                  Stay informed about coastal wonders. Subscribe now for
                  exclusive updates on geomorphology, shoreline change, and
                  environmental conservation.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import { ref } from "vue";

export default {
  components: {
    sitenav: require("components/Website/navigation.vue").default,
  },
  setup() {
    return {
      slide: ref(1),
      autoplay: ref(true),
      tab: ref("mails"),
    };
  },
};
</script>

<style>
/* *{
  box-sizing: border-box;
  outline: 3px solid limegreen !important;
} */
/* Hide the scrollbar but retain functionality */
::-webkit-scrollbar {
  width: 0em; /* Adjust as needed */
}

::-webkit-scrollbar-track {
  background: transparent; /* Set to the background color of your page */
}

::-webkit-scrollbar-thumb {
  background: transparent; /* Set to the background color of your page */
  border: none;
}

/* Optional: Hover styles for the thumb */
::-webkit-scrollbar-thumb:hover {
  background: transparent; /* Set to a different color for hover effect if desired */
}

/* Hide scrollbar for Chrome, Safari and Opera */
.scrollbar-hidden::-webkit-scrollbar {
  display: none;
  overflow: hidden;
}

/* Hide scrollbar for IE, Edge add Firefox */
.scrollbar-hidden {
  -ms-overflow-style: none;
  scrollbar-width: none; /* Firefox */
}

.page-tint {
  background-color: rgba(107, 107, 107, 0.89);
  background-blend-mode: multiply;
}

#hero {
  background-image: url("~/src/assets/hero2.jpg");
  background-size: 100%;
  /* Center and scale the image nicely */
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  /* animation-name: beat;
  animation-duration: 1.5s;
  animation-iteration-count: 5; */
}

#about {
  background-image: url("~/src/assets/login_bg.jpg");
  background-size: 100%;
  /* Center and scale the image nicely */
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  /* animation-name: beat;
  animation-duration: 1.5s;
  animation-iteration-count: 5; */
}

#blog {
  background-image: url("~/src/assets/comoros.png");
  background-size: 100%;
  /* Center and scale the image nicely */
  /*background-attachment: fixed;*/
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  /* animation-name: beat;
  animation-duration: 1.5s;
  animation-iteration-count: 5; */
}

/* #pulse {
  animation-name: beat;
  animation-duration: 1.5s;
  animation-iteration-count: 5;
} */

@keyframes beat {
  from {
    background-size: cover;
  }
  to {
    background-size: 150%;
  }
}

.jumbotron {
  height: 100%;
  background-size: cover;
  /* background-color: rgb(51, 51, 51, 0.1);
  box-shadow: inset 0 0 0 2000px rgba(0, 0, 0, 0.1); */
}

.content-card {
  height: 80vh;
  background-size: cover;
  background: #ffffff;
  box-shadow: 0 0 3rem 0 rgb(0 0 0 / 10%);
}

@media screen and (max-width: 768px) {
  .head-text {
    font-size: 28px;
  }
}

@media screen and (min-width: 768px) {
  .head-text {
    font-size: 35px;
  }
}
</style>
