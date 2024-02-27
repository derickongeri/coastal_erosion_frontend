<template>
  <q-layout view="hHh lpR fFf">
    <q-drawer
      class="mobile-view"
      v-model="rightDrawerOpen"
      side="right"
      style="z-index: 5000"
    >
      <div
        class="row"
        style="position: absolute; z-index: 5001; left: -5%; top: 2%"
      >
        <q-btn
          color="grey-1"
          text-color="primary"
          round
          unelevated
          icon="mdi-chevron-right"
          size="md"
          @click="toggleRightDrawer"
        ></q-btn>
      </div>
      <div
        class="column justify-between bg-grey-1 text-lime-9"
        style="position: absolute; height: 100%; width: 100%; z-index: 5000"
      >
        <div class="row" style="width: 100%">
          <q-list
            padding
            class="rounded-borders text-primary my-font"
            style="width: 100%; font-size: 16px; font-weight: bold"
          >
            <q-item v-if="user" class="q-my-lg q-pt-lg">
              <q-item-section>
                <q-item-label
                  class="text-h6"
                  style="font-size: 21px; font-weight: bold"
                  >{{ user.user_metadata.firstName }}
                  {{ user.user_metadata.lastName }}</q-item-label
                >
                <q-item-label caption style="font-size: 12px">{{
                  user.email
                }}</q-item-label>
              </q-item-section>

              <q-item-section avatar>
                <q-avatar color="primary" text-color="grey-1"
                  >{{ user.user_metadata.firstName.charAt(0)
                  }}{{ user.user_metadata.lastName.charAt(0) }}</q-avatar
                >
              </q-item-section>
            </q-item>

            <q-item v-else class="q-my-lg q-pt-lg" clickable to="/login">
              <q-item-section avatar>
                <q-icon size="" name="mdi-login-variant" />
              </q-item-section>
              <q-item-section>
                <q-item-label
                  class="text-h6"
                  style="font-size: 21px; font-weight: bold"
                  >{{ $t("login") }}</q-item-label
                >
                <q-item-label caption style="font-size: 12px"
                  >Login to access features</q-item-label
                >
              </q-item-section>

              <!-- <q-item-section avatar>
                <q-avatar color="primary" text-color="grey-1"
                  ></q-avatar
                >
              </q-item-section> -->
            </q-item>

            <q-separator spaced />

            <q-item clickable v-ripple to="home">
              <q-item-section avatar>
                <q-icon size="xs" name="mdi-home" />
              </q-item-section>

              <q-item-section>{{ $t("home") }}</q-item-section>
            </q-item>

            <q-item clickable v-ripple to="apps/dashboard">
              <q-item-section avatar>
                <q-icon size="xs" name="mdi-view-dashboard" />
              </q-item-section>

              <q-item-section>{{ $t("dashboard") }}</q-item-section>
            </q-item>

            <q-item
              clickable
              v-ripple
              @click="toggleSettings = !toggleSettings"
            >
              <q-item-section avatar>
                <q-icon size="xs" name="mdi-cog" />
              </q-item-section>

              <q-item-section>{{ $t("settings") }}</q-item-section>
            </q-item>

            <q-separator spaced />

            <q-list
              v-if="toggleSettings"
              class="q-mx-md"
              style="min-width: 100px"
            >
              <q-item clickable v-ripple to="me" v-if="user">
                <q-item-section avatar>
                  <q-icon size="xs" name="mdi-account-cog" />
                </q-item-section>

                <q-item-section>{{ $t("my_profile") }}</q-item-section>
              </q-item>
              <q-item clickable>
                <q-item-section avatar>
                  <q-icon size="xs" name="mdi-translate" />
                </q-item-section>
                <q-item-section>
                  <q-select
                    label-color="grey-9"
                    v-model="locale"
                    :options="localeOptions"
                    :label="$t('select_language')"
                    dense
                    borderless
                    emit-value
                    map-options
                    options-dense
                    style="min-width: 150px"
                  >
                  </q-select>
                </q-item-section>

                <!-- <q-item-section>Language</q-item-section> -->
              </q-item>
            </q-list>
          </q-list>
        </div>

        <div class="row" v-if="user">
          <q-list
            padding
            class="rounded-borders text-primary my-font"
            style="width: 100%; font-size: 16px; font-weight: bold"
          >
            <q-separator spaced />
            <q-item
              clickable
              v-ripple
              :active="link === 'help'"
              @click="handleLogout"
            >
              <q-item-section avatar>
                <q-icon size="xs" name="logout" />
              </q-item-section>

              <q-item-section>{{ $t("logout") }}</q-item-section>
            </q-item>
          </q-list>
        </div>
      </div>
    </q-drawer>

    <q-page-container
      style="padding-bottom: 0px"
      class="my-font page-tint"
      id="hero"
    >
      <q-header
        reveal
        class="text-white q-py-lg navigation-background-color"
        height-hint="98"
      >
        <q-toolbar>
          <q-toolbar-title style="margin-left: 5%">
            <div class="row">
              <div class="column q-pr-xl">
                <router-link to="/home"
              >
                <img
                  src="~/src/assets/cogeos.svg"
                  style="position: relative; width: 100%; height: 35px"
                />
                </router-link>
              </div>
              <div class="column">
                <img
                  src="~/src/assets/rcmrd_logo.jpg"
                  style="position: relative; width: 100%; height: 35px"
                />
              </div>
              <div class="column q-pl-md">
                <img
                  src="~/src/assets/GMESlogo.png"
                  style="
                    position: relative;
                    width: 100%;
                    height: 35px;
                    left: -1%;
                  "
                />
              </div>

              <div class="column q-pl-md">
                <img
                  src="~/src/assets/AUlogo.png"
                  style="
                    position: relative;
                    width: 100%;
                    height: 33px;
                    left: -1%;
                  "
                />
              </div>
              <div class="column q-pl-md">
                <img
                  src="~/src/assets/EUlogo.png"
                  style="
                    position: relative;
                    width: 100%;
                    height: 33px;
                    left: -1%;
                  "
                />
              </div>
            </div>
          </q-toolbar-title>
          <q-tabs
            align="left"
            no-caps
            dense
            inline-label
            class="text-black my-font-2"
            style="margin-right: auto"
          >
            <!-- <q-route-tab name="images" :label="$t(`home`)" to="/home" /> -->
            <q-route-tab
              ripple='false'
              name="videos"
              :label="$t('dashboard')"
              to="/apps/dashboard"
            />
            <!-- <q-route-tab name="articles" label="blog" to="/blog/blog_posts" /> -->
            <q-btn-dropdown
              class="dash-nav3"
              no-caps
              auto-close
              stretch
              flat
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
            <q-btn
              v-if="user"
              class="my-font-2 q-mr-md"
              style="font-weight: 400"
              flat
              no-caps
              color="grey-9"
              icon="mdi-account"
              icon-right="mdi-menu-down"
              :label="'Hi, ' + user.user_metadata.firstName"
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
              class="my-font-2 q-mr-lg"
              style="font-weight: 400"
              flat
              no-caps
              color="grey-9"
              icon="mdi-account"
              :label="$t('login')"
              to="/login"
            />

            <!-- <q-route-tab icon="mdi-newspaper-variant" name="article" label="Mapographics" />
        <q-route-tab icon="mdi-tools" name="article" label="Qgis Toolbox" /> -->
            <!-- <q-route-tab icon="mdi-lifebuoy" name="help" label="info/help" /> -->
          </q-tabs>

          <div class="my-font q-mr-sm" style="font-weight: 700">
            <q-select
              label-color="grey-9"
              v-model="locale"
              :options="localeOptions"
              dense
              borderless
              emit-value
              map-options
              style="
                font-weight: 700;
                font-size: 12px;
                font-color: rgb(41, 41, 41);
              "
            >
              <!-- <template v-slot:prepend
              ><q-icon color="grey-9" size="xs" name="mdi-web"
            /></template> -->
            </q-select>
          </div>
        </q-toolbar>
      </q-header>
      <router-view />

    </q-page-container>
  </q-layout>
</template>

<script>
import { computed, defineComponent, ref } from "vue";

import userAuthUser from "src/composables/userAuthUser";
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
    };
  },
});
</script>

<style lang="scss">
/* Hide scrollbar for Chrome, Safari and Opera */
.scrollbar-hidden::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge add Firefox */
.scrollbar-hidden {
  -ms-overflow-style: none;
  scrollbar-width: none; /* Firefox */
}

.my-menu-link {
  color: white;
  background: #f2c037;
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
