<template>
  <div>
    <h1>Blog Posts</h1>
    <ul>
      <li v-for="post in blogPosts" :key="post.id">
        <h2>{{ post.title }}</h2>
        <p>{{ post.content }}</p>
        <p>Author: {{ post.author }}</p>
        <p>Timestamp: {{ formatDate(post.timestamp) }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import { ref, onMounted } from "vue"; // Import ref and onMounted from Vue

export default {
  setup() {
    // Define a ref to store the list of blog posts
    const blogPosts = ref([]);

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
          content: "Vue.js is a progressive JavaScript framework for building user interfaces...",
          author: "John Doe",
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
    };
  },
};
</script>
