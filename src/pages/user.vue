<template>
  <q-page class="row justify-center bg-blue-1" style="overflow: hidden">
    <div v-if="user">
      <!-- <p>Hello {{ user.user_metadata.firstName }}</p>
      <p>Hello {{ user.email }}</p> -->
      <q-card
        class="my-card q-my-md"
        flat
        style="min-width: 60vw; border-radius: 20px"
      >
        <div class="bg-grey-4" style="height: 20vh"></div>

        <q-card-section class="q-py-md">
          <q-avatar
            size="150px"
            font-size="120px"
            color="primary"
            text-color="white"
            icon="mdi-account"
            class="absolute"
            style="
              top: 0;
              right: 28px;
              transform: translateY(-50%);
              border: 2px solid white;
            "
          />

          <!-- <div class="row no-wrap items-center">
          <div class="col text-h6 ellipsis">
            Cafe Basilico
          </div>
          <div class="col-auto text-grey text-caption q-pt-md row no-wrap items-center">
            <q-icon name="place" />
            250 ft
          </div>
        </div>

        <q-rating v-model="stars" :max="5" size="32px" /> -->
        </q-card-section>

        <q-card-section class="q-mt-md">
          <div class="text-subtitle1" style="font-size:21px">
            {{ user.user_metadata.firstName }} {{ user.user_metadata.lastName }}
          </div>
          <div class="text-caption text-grey-9">
            {{ user.email }}
          </div>
          <div class="text-grey-9">
            {{ user.user_metadata.role }} | {{ user.user_metadata.organization }}
          </div>
        </q-card-section>

        <q-card-actions class="q-pb-lg">
          <q-btn
            class="q-mx-sm"
            no-caps
            outline
            color="primary"
            label="notifications"
          />
          <q-btn
            class="q-mx-md"
            no-caps
            unelevated
            color="primary"
            icon="mdi-pencil-outline"
            label="update profile"
          />
        </q-card-actions>
      </q-card>
    </div>
    <div v-else>Not logged in</div>
  </q-page>
</template>

<script>
import { defineComponent, onMounted } from "vue";
import userAuthUser from "src/composables/userAuthdjango";

export default defineComponent({
  name: "mePage",

  setup() {
    const { user } = userAuthUser();

    onMounted(() => {
      console.log(user.value);
    });

    return { user };
  },
});
</script>
