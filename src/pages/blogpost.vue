<template>
  <div>
    <div
      style="min-width: 100%; background-color: #ffffff"
      class="row justify-center q-pa-none q-ma-none"
    >
      <div
        class="column justify-center q-px-none q-mt-md q-pb-md q-ma-none"
        style="min-height: 15vh; min-width: 66%"
      >
        <div class="row">
          <div class="column q-pr-md q-pt-sm" style="font-weight: 700">
            CoGEOS Blog
          </div>
          <q-separator vertical color="grey-7" />
          <div class="column">
            <q-tabs no-caps v-model="tab" dense class="text-grey-9">
              <q-tab name="mails" label="Benthic Habitat" />
              <q-tab name="alarms" label="Coastal Erosion" />
              <q-tab name="movies" label="Coastal Landuse" />
              <q-tab name="mails" label="GMES & Africa" />
              <q-tab name="mails" label="Partnerships"></q-tab>
            </q-tabs>
          </div>
        </div>
      </div>
    </div>

    <div class="" style="min-width: 100%; min-height: fit-content">
      <div
        class="column q-mx-auto q-gutter-y-md"
        style="max-width: 66%; min-height: 46vh"
      >
        <div class="row">BLOG TAG</div>
        <div class="row">
          <div class="my-font-2" style="font-weight: 700px; font-size: xx-large">
            {{ post.title }}
          </div>
        </div>
        <div class="row my-font-2">{{ formatDate(post.timestamp) }}</div>
        <div class="row" style="min-height: 40vh">
          <q-img
            src="~/src/assets/hero2.jpg"
            style="position: relative; max-height: 40vh"
          />
        </div>
      </div>
    </div>

    <div class="q-mt-xl q-pt-lg" style="min-width: 100%; min-height: 50vh">
      <div class="row q-mx-auto" style="max-width: 66%; min-height: 46vh">
        <div class="col-2">
          <div class="my-font" style="font-weight: 700px">Share</div>
          <div class="row">
            <q-btn
              padding="none"
              flat
              color="grey-8"
              size="md"
              icon="mdi-facebook"
              @click="facebook"
            />
            <q-btn
              round
              flat
              color="grey-8"
              size="md"
              icon="mdi-linkedin"
              @click="linkedin"
            />
            <q-btn
              round
              flat
              color="grey-8"
              size="md"
              icon="mdi-twitter"
              @click="twitter"
            />
            <q-btn
              round
              flat
              color="grey-8"
              size="md"
              icon="mdi-content-copy"
              @click="clipboard"
            />
          </div>
        </div>
        <div class="col-8 my-font-2" style="font-size: medium;">
          <div>{{ post.content }}</div>
          <div style="display: block">
            <router-link to="/blog/blog_posts"
              ><q-btn
                no-caps
                unelevated
                rounded
                color="primary"
                icon="mdi-arrow-left"
                label="Read more from the CoGEOS blog"
            /></router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useQuasar } from "quasar";
import { ref, computed, onMounted } from "vue";
import { useRoute } from "vue-router";
import "dayjs";

export default {
  setup() {
    const $q = useQuasar();
    const route = useRoute();
    const post = ref({});
    const url = ref("");
    const message = ref("");

    onMounted(() => {
      post.value = route.params;
      url.value = window.location.href;
      message.value = post.value.title;
      console.log(url.value);
      console.log(route.params);
      console.log(message.value);
    });

    // Format the timestamp
    const formatDate = (timestamp) => {
      const dayjs = require("dayjs");
      const parsedDate = dayjs(timestamp);
      const formattedDate = parsedDate.format("MMMM DD, YYYY");
      // Implement a function to format the timestamp (e.g., using a date library like dayjs)
      // Example: return dayjs(timestamp).format('YYYY-MM-DD HH:mm:ss');
      return formattedDate;
    };

    const facebook = () => {
      window.open(
        "https://www.facebook.com/dialog/share?app_id=821923318980328&display=popup&href=" +
          encodeURIComponent(url.value) +
          "&quote=" +
          encodeURIComponent(message.value)
      );
    };

    const linkedin = () => {
      window.open(
        "https://www.linkedin.com/sharing/share-offsite/?url=" +
          encodeURIComponent(url.value) +
          "&message=" +
          encodeURIComponent(message.value)
      );
    };

    const twitter = () => {
      window.open(
        "https://twitter.com/intent/tweet?url=" +
          encodeURIComponent(url.value) +
          "&text=" +
          encodeURIComponent(url.value)
      );
    };

    const clipboard = () => {
      if (navigator.clipboard) {
        navigator.clipboard.writeText(message.value + " " + url.value);
      } else {
        let textArea = document.createElement("textarea");
        textArea.value = message.value + " " + url.value;
        textArea.style.top = "0";
        textArea.style.left = "0";
        textArea.style.position = "fixed";
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand("copy");
        document.body.removeChild(textArea);
      }
      $q.notify({
        message: "Copied to clipboard: " + /*this.message + */ " " + url.value,
        timeout: 2000,
      });
    };

    return {
      formatDate,
      facebook,
      linkedin,
      twitter,
      clipboard,
      post,
    };
  },
};
</script>
