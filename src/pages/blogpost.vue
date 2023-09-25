<template>
  <div>
    <h1>{{ post.title }}</h1>
    <p>{{ post.content }}</p>
    <p>Author: {{ post.author }}</p>
    <p>Timestamp: {{ formatDate(post.timestamp) }}</p>
    <router-link to="/blog_posts">Back to Blog</router-link>
  </div>
</template>

<script>
import { ref, computed, onMounted } from 'vue';
import { useRoute } from 'vue-router';

export default {
  // props: {
  //   post: {
  //     type:Object,
  //     default: {
  //       title: "not being passed",
  //       content: "nothing to see here"
  //     }
  //   }, // This prop will receive the selected blog post from the parent component
  // },
  setup() {
    const route = useRoute();
    const post = ref({})

    onMounted(()=>{
      post.value = route.params
      console.log(route.params)
    })

    // Format the timestamp
    const formatDate = (timestamp) => {
      // Implement a function to format the timestamp (e.g., using a date library like dayjs)
      // Example: return dayjs(timestamp).format('YYYY-MM-DD HH:mm:ss');
      return timestamp;
    };

    return {
      formatDate,
      post
    };
  },
};
</script>
