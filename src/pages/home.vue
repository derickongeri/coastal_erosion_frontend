<template>
  <q-page
    padding
    v-if="matchMediaDesktop"
    class="q-pa-none scrollbar-hidden"
    style="overflow: hidden"
  >
    <div
      class="row items-center jumbotron page-tint"
      id="hero"
      style="min-height: 100vh; max-width: 90%; margin: auto"
    >
      <div
        class="column items-left"
        style="min-height: 70%; border-radius: 20px; max-width: 45%"
      >
        <div
          class="blurred-section"
          style="border-radius: 20px; background-color: #03213534"
        >
          <div class="column">
            <div class="col justify-left">
              <div
                class="my-font-2 text-left text-grey-1 q-pa-none"
                style="
                  font-weight: bold;
                  font-size: xxx-large;
                  line-height: 1.5;
                "
              >
                {{ $t("tagline") }}
              </div>
            </div>
            <div class="row justify-left">
              <div
                class="my-font-2 text-left text-grey-1 q-px-none q-pb-md"
                style="font-weight: 400; font-size: 21px"
              >
                {{ $t("subtag") }}
              </div>
            </div>
          </div>
        </div>

        <div class="row justify-left">
          <!-- <div class="row justify-center text-white" style="font-weight:700; font-size:21px;width:100%">Choose an Application to Launch</div> -->
          <div class="text-left q-py-md my-font-2" style="min-width: 60%">
            <q-btn
              class="my-font-2 text-bold"
              size="lg"
              icon-right="mdi-arrow-right"
              text-color="blue-9"
              style="background-color: #ffffff; border-radius: 12px"
              :label="$t('webgis')"
              to="apps/dashboard"
            />
          </div>
        </div>
      </div>
      <div class="col items-center" style="min-height: 100%; min-width: 40%">
        <div
          class="column justify-center items-center"
          style="min-height: 100%"
        >
          <div class="" style="height: 100%; width: 90%">
            <div class="row">
              <q-img
                class="col"
                src="~/src/assets/benthic.png"
                style="
                  position: relative;
                  border-radius: 20px;
                  min-height: 100%;
                "
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div
      style="min-width: 100%; min-height: 100vh; background-color: #ffffff"
      class="row justify-center q-pa-none q-ma-none"
    >
      <div
        class="col justify-around q-pa-none q-my-xl"
        style="min-height: 100%; max-width: 90%"
      >
        <div
          class="my-font-2 text-justify q-px-md q-pt-xl"
          style="font-weight: 700; font-size: 30px; color: #25408f"
        >
          {{ $t("productsheader") }}
        </div>
        <div
          class="my-font-2 text text-grey-9 q-px-md q-pt-xs"
          style="font-weight: 400; font-size: 18px"
        >
          <p>
            {{ $t("productstext") }}
          </p>
        </div>
        <div class="row q-py-lg q-mb-lg">
          <div class="col q-ma-md">
            <q-card class="my-card my-font-2" flat>
              <div class="column" style="border-radius: 20px">
                <q-img
                  src="~/src/assets/benthic.png"
                  style="border-radius: 20px"
                >
                  <!-- <div class="absolute-bottom text-h6">Title</div> -->
                </q-img>
              </div>

              <q-card-section class="q-px-none">
                <div style="font-weight: 700; font-size: 30px; color: #25408f">
                  {{ $t("benthickheader") }}
                </div>
              </q-card-section>

              <q-card-section
                class="text-grey-9 text-justify q-ma-none q-px-none"
                style="background-color: #77b8b200"
              >
                {{ $t("benthicktext") }}
              </q-card-section>
            </q-card>
          </div>
          <div class="col q-ma-md">
            <q-card class="my-card my-font-2" flat>
              <q-img
                src="~/src/assets/terrestrial.png"
                style="border-radius: 20px"
              >
                <!-- <div class="absolute-bottom text-h6">Title</div> -->
              </q-img>
              <q-card-section class="q-px-none">
                <div style="font-weight: 700; font-size: 30px; color: #25408f">
                  {{ $t("landuseheader") }}
                </div>
              </q-card-section>
              <q-card-section
                class="text-grey-9 q-ma-none q-px-none"
                style="background-color: #77b8b200"
              >
                {{ $t("landusetext") }}
              </q-card-section>
            </q-card>
          </div>
          <div class="col q-ma-md">
            <q-card class="my-card my-font-2" flat>
              <q-img
                src="~/src/assets/shoreline.png"
                style="border-radius: 20px"
              >
                <!-- <div class="absolute-bottom text-h6">Title</div> -->
              </q-img>

              <q-card-section class="q-px-none">
                <div style="font-weight: 700; font-size: 30px; color: #25408f">
                  {{ $t("shorelineheader") }}
                </div>
              </q-card-section>

              <q-card-section
                class="text-grey-9 q-ma-none q-px-none"
                style="background-color: #77b8b200"
              >
                {{ $t("shorelinetext") }}
              </q-card-section>
            </q-card>
          </div>
        </div>
      </div>
    </div>
    <div
      style="min-width: 10vw; min-height: 100vh"
      class="row items-center justify-center q-pa-none q-ma-none page-tint"
      id="about-section"
    >
      <div
        class="col q-pa-none q-ma-none"
        style="min-height: 70%; max-width: 90%"
      >
        <div class="row q-py-lg q-mb-lg">
          <div class="col q-ma-xl" style="border-radius: 15px">
            <q-video
              src="https://www.youtube.com/embed/g-gz1ZiPXkI?si=5grVleFNA5xb6gr9"
              :ratio="16 / 9"
            />
          </div>
          <div class="col q-ma-xl">
            <q-card
              flat
              class="my-card text-grey-9 my-font-2 text-justify"
              style="background-color: #0f1b24a00; border-radius: 15px"
            >
              <div
                class="my-font-2 text-center q-px-md q-py-md"
                style="font-weight: 700; font-size: 30px; color: #25408f"
              >
                {{ $t("aboutTitle") }}
              </div>
              <q-card-section style="font-weight: 400; font-size: 18px">
                <P> {{ $t("aboutText") }} </P>

                <P>{{ $t("moreAboutText") }}</P>
              </q-card-section>
            </q-card>
          </div>
        </div>
      </div>
    </div>
    <div
      class="column justify-around q-py-xl justify-around"
      style="min-width: 100vw"
      id="products-section"
    >
      <div class="row justify-between q-my-xl q-mx-auto" style="min-width: 90%">
        <div class="col-4 q-pa-md">
          <div class="column justify-center">
            <div class="col justify-left">
              <div
                class="my-font-2 text-left text-grey-1 q-pa-none"
                style="
                  font-weight: bold;
                  font-size: xxx-large;
                  line-height: 1.5;
                "
              >
                {{ $t("dashboardHeader") }}
              </div>
            </div>
            <div class="row justify-left">
              <div
                class="my-font-2 text-left text-grey-1 q-px-none q-pb-md"
                style="font-weight: 400; font-size: 21px"
              >
                {{ $t("dashboardText") }}
              </div>
            </div>
          </div>
        </div>
        <div class="col-6">
          <div
            class="column justify-center items-center"
            style="min-height: 100%"
          >
            <div class="" style="height: 100%; width: 90%">
              <div class="row">
                <q-img
                  class="col"
                  src="~/src/assets/dashboard.png"
                  style="
                    position: relative;
                    border-radius: 20px;
                    min-height: 100%;
                  "
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row justify-between q-my-xl q-mx-auto" style="min-width: 90%">
        <div class="col-6">
          <div
            class="column justify-center items-center"
            style="min-height: 100%"
          >
            <div class="" style="height: 100%; width: 90%">
              <div class="row">
                <q-img
                  class="col"
                  src="~/src/assets/plugin.png"
                  style="
                    position: relative;
                    border-radius: 20px;
                    min-height: 100%;
                  "
                />
              </div>
            </div>
          </div>
        </div>
        <div class="col-4 q-pa-md">
          <div class="column justify-center">
            <div class="col justify-left">
              <div
                class="my-font-2 text- text-grey-1 q-pa-none"
                style="
                  font-weight: bold;
                  font-size: xxx-large;
                  line-height: 1.5;
                "
              >
                {{ $t("pluginHeader") }}
              </div>
            </div>
            <div class="row justify-left">
              <div
                class="my-font-2 text-left text-grey-1 q-px-none q-pb-md"
                style="font-weight: 400; font-size: 21px"
              >
                {{ $t("pluginText") }}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row justify-between q-my-xl q-mx-auto" style="min-width: 90%">
        <div class="col-4 q-pa-md">
          <div class="column justify-center">
            <div class="col justify-left">
              <div
                class="my-font-2 text-left text-grey-1 q-pa-none"
                style="
                  font-weight: bold;
                  font-size: xxx-large;
                  line-height: 1.5;
                "
              >
                {{ $t("mapographicsHeader") }}
              </div>
            </div>
            <div class="row justify-left">
              <div
                class="my-font-2 text-left text-grey-1 q-px-none q-pb-md"
                style="font-weight: 400; font-size: 21px"
              >
                {{ $t("mapographicsText") }}
              </div>
            </div>
          </div>
        </div>
        <div class="col-6">
          <div
            class="column justify-center items-center"
            style="min-height: 100%"
          >
            <div class="" style="height: 100%; width: 90%">
              <div class="row">
                <q-img
                  class="col"
                  src="~/src/assets/mapographics.png"
                  style="
                    position: relative;
                    border-radius: 20px;
                    min-height: 100%;
                  "
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div
      style="min-width: 100%; min-height: 45vh; background-color: #ffffff"
      class="row items-center justify-center q-pa-none q-ma-none"
    >
      <div
        class="column justify-center q-pa-none q-ma-none"
        style="min-height: 70%; max-width: 90%"
      >
        <div
          class="my-font-2 text-center q-px-md q-py-md"
          style="font-weight: 700; font-size: 30px; color: #25408f"
        >
          {{ $t("collaborationText") }}
        </div>
        <div class="row q-gutter-x-lg">
          <div class="column">
            <img
              src="~/src/assets/rcmrd_logo.jpg"
              style="position: relative; width: 100%; height: 70px"
            />
          </div>
          <div class="column q-pl-md">
            <img
              src="~/src/assets/GMESlogo.png"
              style="position: relative; width: 100%; height: 70px; left: -1%"
            />
          </div>

          <div class="column q-pl-md">
            <img
              src="~/src/assets/AUlogo.png"
              style="position: relative; width: 100%; height: 70px; left: -1%"
            />
          </div>
          <div class="column q-pl-md">
            <img
              src="~/src/assets/EUlogo.png"
              style="position: relative; width: 100%; height: 70px; left: -1%"
            />
          </div>
        </div>
      </div>
    </div>

    <div
      style="min-width: 100%; min-height: 50vh; background-color: #032135"
      class="row justify-center q-pa-none q-ma-none"
    >
      <div
        class="column justify-center q-pa-none"
        style="max-width: 90vw; min-height: 100%"
      >
        <div class="row q-my-lg">
          <div class="col q-ma-md" style="min-width: 25vw">
            <div class="column items-center">
              <div class="column items-start q-gutter-none" style="">
                <q-list>
                  <q-item>
                    <q-item-section>
                      <q-item-label class="text-white" style="font-size: 21px"
                        >Regional Center for Mapping of Resouces for
                        Development</q-item-label
                      >
                      <div
                        class="col q-my-none q-py-none text-blue-2"
                        style="font-size: 12px"
                        caption
                        lines="2"
                      >
                        P.O. Box 632-00618 Nairobi, Kenya<br />Roysambu,
                        Kasarani Nairobi, Kenya<br />(+254) 723 786161
                        <br />rcmrd@rcmrd.org
                      </div>
                    </q-item-section>
                  </q-item>
                </q-list>
              </div>
            </div>
          </div>
          <q-separator vertical color="grey-7" />
          <div class="col q-ma-md" style="min-width: 25vw">
            <div class="column items-center">
              <div
                class="q-my-none text-justify text-grey-1"
                style="max-width: 25vw"
              >
                <div class="q-pa-md" style="font-weight: 700; font-size: 21px">
                  {{ $t("keepintouch") }}
                </div>
                <div class="q-px-md q-pb-md">
                  {{ $t("keepintouchtext") }}
                </div>
                <div class="row justify-left q-gutter-lg items-left">
                  <q-btn
                    round
                    flat
                    color="grey-1"
                    size="md"
                    icon="mdi-facebook"
                    href="https://web.facebook.com/rcmrd.org/?_rdc=1&_rdr"
                  />
                  <q-btn
                    round
                    flat
                    color="grey-1"
                    size="md"
                    icon="mdi-linkedin"
                    href="https://www.linkedin.com/company/regional-centre-for-mapping-of-resources-for-development-rcmrd-/?originalSubdomain=ke"
                  />
                  <q-btn
                    round
                    flat
                    color="grey-1"
                    size="md"
                    icon="mdi-twitter"
                    href="https://twitter.com/RCMRD_GMES"
                  />
                </div>
              </div>
            </div>
          </div>
          <q-separator vertical color="grey-7" />
          <div class="col items-center q-ma-md" style="min-width: 25vw">
            <div class="column items-center">
              <div class="row items-center q-gutter-sm">
                <div class="col">
                  <img
                    src="~/src/assets/RCMRD_Logo_White.svg"
                    style="
                      position: relative;
                      width: 120%;
                      height: 50px;
                      left: -1%;
                    "
                  />
                </div>
                <div class="col q-pl-md">
                  <img
                    src="~/src/assets/rcmrd_gmes.png"
                    style="
                      position: relative;
                      width: 121px;
                      height: 39.77px;
                      left: -1%;
                    "
                  />
                </div>

                <div class="col q-pl-md">
                  <img
                    src="~/src/assets/AUlogo.png"
                    style="position: relative; width: 100%; left: -1%"
                  />
                </div>
                <div class="col q-pl-md">
                  <img
                    src="~/src/assets/EUlogo.png"
                    style="position: relative; width: 50%; left: -1%"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </q-page>
  <q-page class="bg-white" v-if="matchMediaMobile">
    <div class="page-tint hero" style="min-height: 70vh">
      <div
        class="my-font-2 text-center q-pt-xl text-grey-1 q-pa-none"
        style="
          max-width: 90vw;
          margin: auto;
          font-weight: medium;
          font-size: xx-large;
          line-height: 1.75;
        "
      >
        {{ $t("tagline") }}
      </div>
      <div
        class="my-font-2 q-pt-lg text-center text-grey-1 q-px-none q-pb-md"
        style="font-weight: 400; font-size: 21px; max-width: 90vw; margin: auto"
      >
        {{ $t("subtag") }}
      </div>
      <div class="row justify-left q-pb-lg q-ml-xs" style="max-width: 90vw">
        <!-- <div class="row justify-center text-white" style="font-weight:700; font-size:21px;width:100%">Choose an Application to Launch</div> -->
        <!-- <div class="text-left d q-py-md my-font-2" style="min-width: 60%">
          <q-btn class="q-ml-none" flat color="white" to="apps/dashboard" push>
            <div class="row items-center q-gutter-sm no-wrap">
              <q-avatar
                size="28px"
                font-size="12px"
                color="white"
                text-color="indigo-10"
                icon="mdi-view-dashboard"
              />
              <div class="text-center">{{ $t("webgis") }}</div>
            </div>
          </q-btn>
        </div> -->
        <div class="text-center q-py-md my-font-2" style="min-width: 100vw">
          <q-btn
            class="my-font-2 text-bold"
            size="lg"
            text-color="blue-9"
            style="background-color: #ffffff; border-radius: 12px"
            :label="$t('webgis')"
            to="apps/dashboard"
          />
        </div>
      </div>
      <div
        class="row q-pt-lg justify-center"
        style="z-index: 1000; min-width: 100vw; position: absolute"
      >
        <q-btn
          round
          color="primary"
          @click="scrollToProducts()"
          icon="mdi-chevron-down"
        />
      </div>
    </div>
    <div class="bg-white" style="min-height: 75vh" id="products-section">
      <q-carousel
        v-model="slide"
        transition-prev="slide-right"
        transition-next="slide-left"
        swipeable
        animated
        control-color="indigo-10"
        prev-icon="mdi-chevron-left-circle"
        next-icon="mdi-chevron-right-circle"
        navigation
        padding
        arrows
        height="75vh"
        class="bg-grey-2 text-grey-9"
      >
        <q-carousel-slide name="style" class="column no-wrap flex-center">
          <div class="q-mt-md q-pa-md bg-grey-3 text-left">
            <q-card
              style="width: 76vw; background-color: #03213500"
              class="my-card my-font-2"
              flat
            >
              <q-card-section class="q-px-none">
                <div
                  style="font-weight: 400; font-size: x-large; color: #25408f"
                >
                  {{ $t("benthickheader") }}
                </div>
              </q-card-section>

              <q-card-section
                class="text-grey-9 q-mb-lg q-ma-none q-px-none"
                style="background-color: #77b8b200"
              >
                {{ $t("benthicktext") }}
              </q-card-section>

              <q-img src="~/src/assets/benthic.png" style="border-radius: 5px">
                <!-- <div class="absolute-bottom text-h6">Title</div> -->
              </q-img>
            </q-card>
          </div>
        </q-carousel-slide>
        <q-carousel-slide name="tv" class="column no-wrap flex-center">
          <div class="q-mt-md q-pa-md bg-grey-3 text-left">
            <q-card
              style="width: 76vw; background-color: #03213500"
              class="my-card my-font-2"
              flat
            >
              <q-card-section class="q-px-none">
                <div
                  style="font-weight: 400; font-size: x-large; color: #25408f"
                >
                  {{ $t("landuseheader") }}
                </div>
              </q-card-section>
              <q-card-section
                class="text-grey-9 q-ma-none q-mb-md q-px-none"
                style="background-color: #77b8b200"
              >
                {{ $t("landusetext") }}
              </q-card-section>
              <q-img
                src="~/src/assets/terrestrial.png"
                style="border-radius: 5px"
              >
                <!-- <div class="absolute-bottom text-h6">Title</div> -->
              </q-img>
            </q-card>
          </div>
        </q-carousel-slide>
        <q-carousel-slide name="layers" class="column no-wrap flex-center">
          <div class="q-mt-md q-pa-md bg-grey-3 text-left">
            <q-card
              style="width: 76vw; background-color: #03213500"
              class="my-card my-font-2"
              flat
            >
              <q-card-section class="q-px-none">
                <div
                  style="font-weight: 400; font-size: x-large; color: #25408f"
                >
                  {{ $t("shorelineheader") }}
                </div>
              </q-card-section>
              <q-card-section
                class="text-grey-9 q-ma-none q-mb-md q-px-none"
                style="background-color: #77b8b200"
              >
                {{ $t("shorelinetext") }}
              </q-card-section>
              <q-img
                src="~/src/assets/shoreline.png"
                style="border-radius: 5px"
              >
                <!-- <div class="absolute-bottom text-h6">Title</div> -->
              </q-img>
            </q-card>
          </div>
        </q-carousel-slide>
      </q-carousel>
    </div>
    <div style="">
      <div class="col q-ma-lg">
        <q-card
          flat
          class="my-card text-grey-9 my-font-2 text-justify"
          style="background-color: #f1b24a00; border-radius: 15px"
        >
          <div
            class="my-font-2 text-center q-px-md q-py-md"
            style="font-weight: 400; font-size: x-large; color: #25408f"
          >
            {{ $t("aboutTitle") }}
          </div>
          <q-card-section style="font-weight: 400">
            <!-- <P> {{ $t("aboutText") }} </P> -->

            <P>{{ $t("moreAboutText") }}</P>
          </q-card-section>
        </q-card>
      </div>
    </div>
    <div
      class="q-pa-none q-ma-none"
      style="max-height: 65vh"
      id="products-section"
    >
      <q-carousel
        v-model="slide"
        transition-prev="slide-right"
        transition-next="slide-left"
        swipeable
        animated
        arrows
        infinite
        height="65vh"
        style="background-color: #03213500"
      >
        <q-carousel-slide
          name="style"
          id=""
          class="column q-pa-none no-wrap flex-center"
        >
          <div
            class="column justify-between text-white"
            style="height: 100%; width: 90%"
          >
            <div class="col q-py-md text-left bg-">
              <div style="font-weight: 700; font-size: medium">
                BROWSE PRODUCTS
              </div>
            </div>
            <div class="col-5 text-center">
              <div style="font-weight: 700; font-size: x-large">
                {{ $t("pluginHeader") }}
              </div>
              <div class="text-center">
                <div>
                  {{ $t("pluginText") }}
                </div>
              </div>
            </div>
            <div class="col-4 text-center" style="max-width: 90vw">
              <q-img
                class="col"
                src="~/src/assets/plugin.png"
                style="
                  position: relative;
                  border-radius: 20px;
                  min-height: 100%;
                "
              />
            </div>
          </div>
        </q-carousel-slide>
        <q-carousel-slide
          name="tv"
          id=""
          class="column q-pa-none no-wrap flex-center"
        >
          <div
            class="column justify-between text-white"
            style="height: 100%; width: 90%"
          >
            <div class="col q-py-md text-left bg-">
              <div style="font-weight: 700; font-size: medium">
                BROWSE PRODUCTS
              </div>
            </div>
            <div class="col-5 text-center">
              <div style="font-weight: 700; font-size: x-large">
                {{ $t("dashboardHeader") }}
              </div>
              <div class="text-center">
                <div>
                  {{ $t("dashboardText") }}
                </div>
              </div>
            </div>
            <div class="col-4 text-center" style="max-width: 90vw">
              <q-img
                src="~/src/assets/dashboard.png"
                style="border-radius: 5px"
              >
              </q-img>
            </div>
          </div>
        </q-carousel-slide>
        <q-carousel-slide
          name="mapographics"
          id=""
          class="column q-pa-none no-wrap flex-center"
        >
          <div
            class="column justify-between text-white"
            style="height: 100%; width: 90%"
          >
            <div class="col q-py-md text-left bg-">
              <div style="font-weight: 700; font-size: medium">
                BROWSE PRODUCTS
              </div>
            </div>
            <div class="col-5 text-center">
              <div style="font-weight: 700; font-size: x-large">
                {{ $t("mapographicsHeader") }}
              </div>
              <div class="text-center">
                <div>
                  {{ $t("mapographicsText") }}
                </div>
              </div>
            </div>
            <div class="col-4 text-center" style="max-width: 90vw">
              <div class="row">
                <q-img
                  class="col"
                  src="~/src/assets/mapographics.png"
                  style="
                    position: relative;
                    border-radius: 20px;
                    min-height: 100%;
                  "
                />
              </div>
            </div>
          </div>
        </q-carousel-slide>
      </q-carousel>
    </div>
    <div
      style="min-width: 100%; min-height: 35vh; background-color: #ffffff"
      class="row items-center justify-center q-pa-none q-ma-none"
    >
      <div
        class="column justify-center q-pa-none q-ma-none"
        style="min-height: 70%; max-width: 90%"
      >
        <div
          class="my-font-2 text-center q-px-md q-py-md"
          style="font-weight: 400; font-size: x-large; color: #25408f"
        >
          {{ $t("collaborationText") }}
        </div>
        <div
          class="fit row inline wrap justify-center items-center content-center"
        >
          <div class="column q-my-md">
            <img
              src="~/src/assets/rcmrd_logo.jpg"
              style="position: relative; height: 50px"
            />
          </div>
          <div class="column q-my-md q-pl-md">
            <img
              src="~/src/assets/GMESlogo.png"
              style="position: relative; height: 50px; left: -1%"
            />
          </div>

          <div class="column q-my-md q-pl-md">
            <img
              src="~/src/assets/AUlogo.png"
              style="position: relative; height: 50px; left: -1%"
            />
          </div>
          <div class="column q-my-md q-pl-md">
            <img
              src="~/src/assets/EUlogo.png"
              style="position: relative; height: 50px; left: -1%"
            />
          </div>
          <!-- <div class="column q-my-md q-pl-md">
            <img
              src="~/src/assets/EUlogo.png"
              style="position: relative; height: 35px; left: -1%"
            />
          </div> -->
        </div>
      </div>
    </div>
    <div
      style="min-width: 100%; background-color: #4c5a64"
      class="row justify-center q-pa-none q-ma-none"
    >
      <div
        class="column justify-center q-pa-none"
        style="max-width: 98vw; min-height: 100%"
      >
        <q-separator color="grey-7" />
        <div class="col q-ma-sm">
          <div class="column items-center text-center q-gutter-none" style="">
            <q-list>
              <q-item>
                <q-item-section>
                  <q-item-label class="text-white" style="font-size: 21px"
                    >Regional Center for Mapping of Resouces for
                    Development</q-item-label
                  >
                  <div
                    class="col q-my-none q-py-none text-blue-2"
                    style="font-size: 12px"
                    caption
                    lines="2"
                  >
                    P.O. Box 632-00618 Nairobi, Kenya<br />Roysambu, Kasarani
                    Nairobi, Kenya<br />(+254) 723 786161 <br />rcmrd@rcmrd.org
                  </div>
                </q-item-section>
              </q-item>
            </q-list>
          </div>
        </div>
        <div class="column q-my-lg items-center">
          <div class="q-my-none text-justify text-grey-1">
            <div class="row justify-left q-gutter-lg items-left">
              <q-btn
                round
                flat
                color="grey-1"
                size="md"
                icon="mdi-facebook"
                href="https://web.facebook.com/rcmrd.org/?_rdc=1&_rdr"
              />
              <q-btn
                round
                flat
                color="grey-1"
                size="md"
                icon="mdi-linkedin"
                href="https://www.linkedin.com/company/regional-centre-for-mapping-of-resources-for-development-rcmrd-/?originalSubdomain=ke"
              />
              <q-btn
                round
                flat
                color="grey-1"
                size="md"
                icon="mdi-twitter"
                href="https://twitter.com/RCMRD_GMES"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import { ref, onBeforeMount } from "vue";
import { useRouter } from "vue-router";

export default {
  // components: {
  //   sitenav: require("components/Website/navigation.vue").default,
  // },
  setup() {
    const router = { useRouter };

    const matchMediaDesktop = ref(false),
      matchMediaMobile = ref(false);

    onBeforeMount(() => {
      matchMediaMobile.value = window.matchMedia("(max-width: 768px)").matches;
      matchMediaDesktop.value = window.matchMedia("(min-width: 768px)").matches;
    });

    return {
      slide: ref(1),
      autoplay: ref(true),
      tab: ref("mails"),
      navigateTodashboard: () => {
        // Navigate to the individual post by pushing the route to the router
        router.push(`/apps/dashboard`);
      },
      matchMediaDesktop,
      matchMediaMobile,
      slide: ref("tv"),
      scrollToProducts: () => {
        const element = document.getElementById("products-section");
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      },
    };
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@800&display=swap");

/* *{
  box-sizing: border-box;
  outline: 3px solid limegreen !important;
} */
/* Hide the scrollbar but retain functionality */
::-webkit-scrollbar {
  width: 0em;
  /* Adjust as needed */
}

::-webkit-scrollbar-track {
  background: transparent;
  /* Set to the background color of your page */
}

::-webkit-scrollbar-thumb {
  background: transparent;
  /* Set to the background color of your page */
  border: none;
}

/* Optional: Hover styles for the thumb */
::-webkit-scrollbar-thumb:hover {
  background: transparent;
  /* Set to a different color for hover effect if desired */
}

/* Hide scrollbar for Chrome, Safari and Opera */
.scrollbar-hidden::-webkit-scrollbar {
  display: none;
  overflow: hidden;
}

/* Hide scrollbar for IE, Edge add Firefox */
.scrollbar-hidden {
  -ms-overflow-style: none;
  scrollbar-width: none;
  /* Firefox */
}

.page-tint {
  background-color: rgba(52, 64, 87, 0.911);
  background-blend-mode: multiply;
}

.hero {
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

#about-section {
  background-color: rgba(52, 64, 87, 0.753);
  background-blend-mode: multiply;
  background-image: url("~/src/assets/bg_image.jpg");
  background-attachment: fixed;
  background-size: 100%;
  /* Center and scale the image nicely */
  background-position: left;
  background-repeat: no-repeat;
  background-size: fit;
}

#products-section {
  /* background-color: rgba(52, 64, 87, 0.753); */
  background-image: url("~/src/assets/bg_vector.svg");
  background-color: #032135;
  background-blend-mode: multiply;
  background-attachment: fixed;
  background-size: 100%;
  /* Center and scale the image nicely */
  background-position: left;
  background-repeat: no-repeat;
  background-size: fit;
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

#plugin {
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
    font-size: 48px;
  }
}
</style>
