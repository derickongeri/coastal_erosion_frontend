<template>
  <q-layout view="hHh lpR fFf">
    <q-drawer
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
        <!-- <q-btn-dropdown
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
        </q-btn-dropdown> -->
        <!-- <q-route-tab icon="mdi-newspaper-variant" name="article" label="Mapographics" />
        <q-route-tab icon="mdi-tools" name="article" label="Qgis Toolbox" /> -->
        <q-route-tab icon="mdi-lifebuoy" name="articles" style="height:70px"/>
      </q-tabs>
      
    </q-drawer>
    <q-page-container style="padding-bottom: 0px" class="my-font">
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
