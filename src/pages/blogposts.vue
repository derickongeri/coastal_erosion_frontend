<template>
  <div>
    <h1>Blog Posts</h1>
    <ul>
      <li v-for="post in blogPosts" :key="post.id">
        <!-- Use router-link to navigate to the individual post -->
        <router-link
          :to="{
            name: 'blogpost',
            params: {
              id: post.id,
              ...post,
              // content: post.content,
              // title: post.title,
              // author: post.author,
              // timestamp: post.timestamp,
            },
          }"
          >{{ post.title }}</router-link
        >
      </li>
    </ul>
  </div>
</template>

<script>
import { ref, onMounted } from "vue"; // Import ref and onMounted from Vue
import { useRouter } from "vue-router";

export default {
  components: {
    blogpost: require("./blogpost.vue").default,
  },
  setup() {
    // Define a ref to store the list of blog posts
    const blogPosts = ref([]);
    const router = useRouter();

    // Method to format the timestamp
    const formatDate = (timestamp) => {
      // Implement a function to format the timestamp (e.g., using a date library like dayjs)
      // Example: return dayjs(timestamp).format('YYYY-MM-DD HH:mm:ss');
      return timestamp;
    };

    // Fetch blog posts and update the blogPosts ref
    const fetchBlogPosts = async () => {
      // Replace this with your actual fetching logic from Supabase
      blogPosts.value = [
        {
          id: 1,
          title: "Getting Started with Vue.js",
          content:
            "Vue.js is a progressive JavaScript framework for building user interfaces...",
          author: "John Doe",
          timestamp: "2023-09-23T10:00:00Z",
        },
        {
          id: 2,
          title: "Test two",
          content: "passing this posts to route component using props...",
          author: "Derick",
          timestamp: "2023-09-23T10:00:00Z",
        },
        // Add other blog posts here
      ];
    };

    // Fetch blog posts when the component is mounted
    onMounted(() => {
      fetchBlogPosts();
    });

    // Return data and methods for the template
    return {
      blogPosts,
      formatDate,
      navigateToPost: (postId) => {
        // Navigate to the individual post by pushing the route to the router
        router.push(`/blog/${postId}`);
      },
    };
  },
};
</script>
