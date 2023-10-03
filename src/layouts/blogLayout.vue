<template>
  <q-layout view="hHh lpR fFf">
    <q-page-container>
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
            <q-route-tab name="articles" label="blog" to="/blog/blog_posts" />
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
              style="font-weight: 700"
              flat
              no-caps
              color="grey-1"
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

    <!-- <q-footer class="bg-grey-8 text-white">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg" />
          </q-avatar>
          <div>Title</div>
        </q-toolbar-title>
      </q-toolbar>
    </q-footer> -->
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

.navigation-background-color {
  // width: 100%;
  // height: 100%;
  -webkit-backdrop-filter: blur(5px);
  backdrop-filter: blur(5px);
  background-color: rgb(255, 255, 255);
  // position: absolute;
  // top: 0%;
  // bottom: 0%;
  // left: 0%;
  // right: 0%;
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
