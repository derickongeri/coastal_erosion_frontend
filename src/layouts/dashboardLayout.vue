<template>
  <q-layout view="hHh lpR fFf">
    <q-page-container style="padding-bottom: 0px" class="my-font">
      <div
        v-show="drawer"
        style="
          background: transparent linear-gradient(207deg, #28537d 0%, #5088c6 25%, #46bbd4 100%) 0% 0% no-repeat padding-box;
          position: absolute;
          right: 0%;
          z-index: 6500;
          height: 100%;
          width: 25vw;
          overflow: hidden;
        "
      >
        <div class="row q-px-md">
          <q-space />
          <div class="column q-py-md nav-btn2">
            <q-btn
              round
              flat
              color="white"
              icon="mdi-close"
              @click="drawer = !drawer"
            />
          </div>
        </div>
        <div class="q-pa-md" style="max-width: 25vw">
          <q-list>
            <q-expansion-item
              group="somegroup"
              label="About RCMRD GMES & Africa"
              default-opened
              header-class="text-white my-font drawer-text-headers"
              expand-icon-class="text-white"
            >
              <q-card style="background: #00000000">
                <q-card-section class="bg-none text-justify text-white">
                  <p>
                    The Global Monitoring for Environment and Security and
                    Africa (GMES & Africa) Support Programme is the result of
                    the longstanding cooperation between Africa and Europe in
                    the area of space science & technology, which is one of the
                    key priorities of the long-term EU-Africa Joint Strategy.
                    GMES & Africa Support Programme is administered by the
                    African Union Commission through the Human Resource, Science
                    and Technology (HRST) Commission and supported by a
                    technical assistance team lead by GAF AG.
                  </p>
                  <p>
                    The programme aims at improving African policy-makers’,
                    planners’, scientists’, business and private sector and
                    citizens’ capacities to design, implement, and monitor
                    national, regional and continental policies and to promote
                    sustainable management of natural resources through the use
                    of Earth Observation data and derived information.
                  </p>
                  <p>
                    RCMRD is among 13 successful consortia of institutions that
                    were selected by the African Union Commission (AUC) to serve
                    as Regional Implementing Centres for the Global Monitoring
                    for Environment and Security and Africa (GMES and Africa)
                    Support Programme.
                  </p>
                </q-card-section>
              </q-card>
            </q-expansion-item>

            <q-separator color="grey-4" />

            <q-expansion-item
              group="somegroup"
              label="How it works"
              header-class="text-white my-font drawer-text-headers"
              expand-icon-class="text-white"
            >
              <q-card style="background: #00000000">
                <q-card-section class="bg-none text-justify text-white">
                  The data presented on this site is derived from a thorough and
                  documented process.

                  To understand the sources of our data and
                  the procedures followed in its production, please refer to our
                  <a href="https://cogeos000.readthedocs.io/en/latest/index.html">Documentation</a>.
                </q-card-section>
              </q-card>
            </q-expansion-item>

            <q-separator color="grey-4" />

            <q-expansion-item
              group="somegroup"
              label="Frequently Asked Questions"
              header-class="text-white my-font drawer-text-headers"
              expand-icon-class="text-white"
            >
              <q-card style="background: #00000000">
                <q-card-section class="bg-none text-justify text-white">

                </q-card-section>
              </q-card>
            </q-expansion-item>

            <q-separator color="grey-4" />
          </q-list>
        </div>
      </div>
      <div
        class="row items-start q-gutter-md"
        style="
          position: absolute;
          top: 5px;
          left: 1%;
          z-index: 6000;
          max-width: 33vw;
          border-radius: 15px;
        "
      >
        <div class="col items-center q-px-sm">
          <img src="~/src/assets/RCMRD_Logo_White.svg" style="width: 50%" />
        </div>
      </div>
      <div
        class="row q-gutter-xs q-py-none web-view"
        style="position: absolute; z-index: 5000; top: 1px; right: 1%"
      >
        <div class="column q-py-md nav-btn">
          <q-btn round flat color="white" icon="mdi-home" to="/home" />
        </div>
        <div class="column q-py-md dash-nav3">
          <q-btn-dropdown
            no-caps
            auto-close
            stretch
            flat
            color="white"
            icon="mdi-more"
            label="Products"
          >
            <q-list>
              <q-item clickable @click="tab = 'movies'">
                <q-item-section>Mapographics</q-item-section>
              </q-item>

              <q-item clickable @click="tab = 'photos'">
                <q-item-section>Qgis Plugin</q-item-section>
              </q-item>
            </q-list>
          </q-btn-dropdown>
        </div>
        <div class="column q-py-md q dash-nav2">
          <div class="row">
            <div class="col my-font" style="min-width: fit-content">
              <q-btn
                v-if="user"
                class="my-font"
                style="font-weight: 700; font-size: 16px"
                flat
                no-caps
                color="grey-1"
                icon="mdi-account"
                icon-right="mdi-menu-down"
                :label="user.user_metadata.firstName"
              >
                <q-menu fit>
                  <q-list>
                    <q-item clickable v-close-popup to="/me">
                      <q-item-section>
                        <q-item-label>{{ $t("profile") }}</q-item-label>
                      </q-item-section>
                    </q-item>
                    <q-item clickable v-close-popup @click="handleLogout">
                      <q-item-section>
                        <q-item-label>{{ $t("logout") }}</q-item-label>
                      </q-item-section>
                    </q-item>
                  </q-list>
                </q-menu>
              </q-btn>
              <q-btn
                v-else
                class="my-font q-mr-lg"
                style="font-weight: 700; font-size: 16px"
                flat
                no-caps
                color="grey-1"
                icon="mdi-account"
                :label="$t('login')"
                to="/login"
              />
            </div>

            <div class="col my-font q-mr-sm" style="font-weight: 700">
              <q-select
                dark
                label-color="grey-1"
                v-model="locale"
                :options="localeOptions"
                :label="$t('select_language')"
                dense
                borderless
                emit-value
                map-options
                style="
                  min-width: 150px;
                  font-weight: 700;
                  font-size: 16px;
                  font-color: white;
                "
              >
                <template v-slot:prepend
                  ><q-icon color="grey-1" size="xs" name="mdi-web"
                /></template>
              </q-select>
            </div>
          </div>
        </div>

        <!-- <div class="column q-py-md nav-btn2">
          <q-btn round flat color="white" icon="mdi-email" to="/home"/>
        </div> -->
        <div class="column q-py-md nav-btn">
          <q-btn
            round
            flat
            color="white"
            icon="mdi-dots-vertical"
            @click="drawer = !drawer"
          />
        </div>
      </div>

      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { computed, defineComponent, ref } from "vue";

import userAuthUser from "src/composables/userAuthdjango";
import { useRouter } from "vue-router";
import { useQuasar } from "quasar";
import { useI18n } from "vue-i18n";

export default defineComponent({
  name: "MainLayout",

  // components: {
  //   EssentialLink,
  // },

  setup() {
    const $q = useQuasar();

    const router = useRouter();

    const { logout, user } = userAuthUser();

    const { locale } = useI18n({ useScope: "global" });

    const rightDrawerOpen = ref(false);

    const handleLogout = async () => {
      $q.dialog({
        title: "Logout",
        message: "Do you really want to leave?",
        cancel: true,
        persistent: true,
      }).onOk(async () => {
        await logout();
        router.replace({ name: "login" });
      });
    };

    return {
      currentPath: ref(router.currentRoute.value.path),
      handleLogout,
      user,
      rightDrawerOpen,
      toggleRightDrawer() {
        rightDrawerOpen.value = !rightDrawerOpen.value;
        console.log(router.currentRoute.value.path);
      },
      link: ref("inbox"),
      toggleSettings: ref(false),
      locale,
      localeOptions: [
        { value: "en-US", label: "English" },
        { value: "fr", label: "French" },
        // { value: "es-ES", label: "Spanish" },
        // { value: "sw", label: "Swahili" },
      ],
      tab: ref("images"),
      drawer: ref(false),
      miniState: ref(true),
    };
  },
});
</script>

<style lang="scss">
.my-menu-link {
  color: white;
  background: #f2c037;
}

.drawer-text-headers {
  font-weight: 700;
  font-size: 21px;
}

@media screen and (max-width: 768px) {
  .web-view {
    display: none;
  }
}

@media screen and (min-width: 768px) {
  .mobile-view {
    display: none;
  }
}
</style>
