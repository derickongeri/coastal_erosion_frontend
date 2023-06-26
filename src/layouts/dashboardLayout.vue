<template>
  <q-layout view="hHh lpR fFf">
    <!-- <q-drawer
      class="q-ma-none text-grey-1"
      style="background-color: #030c6a"
      v-model="drawer"
      show-if-above
      @click.capture="drawerClick"
      width="70"

    >
      <q-tabs
        inline-label
        vertical
        no-caps
        class="my-font text-grey-1"
        dense
        v-model="tab"
        switch-indicator
        indicator-color="primary"
      >
      <q-avatar
          square
          size="70px"
          class="q-mb-xl"
          color="white"
        >
          <img src="~/src/assets/rcmrd.png" style="height:90%">
        </q-avatar>
        <q-route-tab
          style="height:70px"
          name="images"
          icon="mdi-home"
          to="/home"
        />
        <q-route-tab
          style="height:70px"
          name="videos"
          icon="mdi-view-dashboard"
          to="./dashboard"
        />
        <q-route-tab
          style="height:70px"
          name="book"
          icon="mdi-bookmark-box-multiple"
          to="/home"
        />
        <q-btn-dropdown
          no-caps
          auto-close
          stretch
          flat
          icon="mdi-more"
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
        <q-route-tab icon="mdi-newspaper-variant" name="article" label="Mapographics" />
        <q-route-tab icon="mdi-tools" name="article" label="Qgis Toolbox" />
        <q-route-tab icon="mdi-lifebuoy" name="articles" style="height:70px"/>
      </q-tabs>

    </q-drawer> -->
    <q-page-container style="padding-bottom: 0px" class="my-font">
      <div
        class="row items-start q-gutter-md"
        style="
          position: absolute;
          top: 1%;
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
        class="row q-gutter-xs"
        style="position: absolute; z-index: 5000; top: 0%; right: 1%"
      >
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

        <div class="column q-py-md nav-btn2">
          <q-btn round flat color="white" icon="mdi-email" to="/home"/>
        </div>
        <div class="column q-py-md nav-btn">
          <q-btn round flat color="white" icon="mdi-dots-vertical" />
        </div>
      </div>

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

.dash-nav {
  // background-color: #ffffff;
  background-image: url("~/src/assets/bgcurve.svg");
  // background-size: 100%;
  /* Center and scale the image nicely */
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100%;
}

.dash-nav2 {
  // background-color: #ffffff;
  background-image: url("~/src/assets/bgcurve2.svg");
  // background-size: 100%;
  /* Center and scale the image nicely */
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100%;
}

.dash-nav3 {
  // background-color: #ffffff;
  background-image: url("~/src/assets/bgcurve3.svg");
  // background-size: 100%;
  /* Center and scale the image nicely */
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100%;
}

.nav-btn {
  // background-color: #ffffff;
  background-image: url("~/src/assets/btnbg1.svg");
  // background-size: 100%;
  /* Center and scale the image nicely */
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100%;
}

.nav-btn2 {
  // background-color: #ffffff;
  background-image: url("~/src/assets/btnbg2.svg");
  // background-size: 100%;
  /* Center and scale the image nicely */
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100%;
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
