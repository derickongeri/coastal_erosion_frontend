<template>
  <div>
    <div
      style="min-width: 100%; background-color: #ffffff"
      class="row justify-center q-pa-none q-ma-none"
    >
      <div
        class="column justify-center q-px-none q-mt-md q-pb-md q-ma-none"
        style="min-height: 15vh; min-width: 66%;"
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

    <router-link
      :to="{
        name: 'post',
        params: {
          id: String(featuredPost.id), // Make sure 'id' is included here
          ...featuredPost,
        },
      }"
    >
      <q-card
        class="my-card q-mx-auto bg-grey-2 hover-link"
        flat
        style="max-width: 66%; max-height: 45vh; border-radius: 20px;"
      >
        <q-card-section horizontal>
          <q-img
            class="col-8"
            src="~/src/assets/hero2.jpg"
            style="position: relative; max-height: 45vh"
          />

          <q-card-section class="column justify-center q-gutter-sm">
            <div
              class="row q-mx-lg my-font-2"
              style="font-weight: 700; font-size: large; text-decoration: none;"
            >
              {{ featuredPost.tag }}
            </div>
            <div
              class="row q-mx-lg my-font-2"
              style="font-weight: 700; font-size: large"
            >
              {{ featuredPost.title }}
            </div>
            <div class="row q-mx-lg my-font-2" style="font-weight: 700">
              Notes reimagined: Everything you need to know about Goodnotes 6
            </div>
            <div class="row q-mx-lg my-font-2">
              <div>{{ formatDate(featuredPost.timestamp) }}</div>
              <div class="blog-card-dot q-px-xs">‧</div>
              <div>{{ featuredPost.author }}</div>
              <!-- <div>{{ featuredPost.id }}</div> -->
            </div>
          </q-card-section>
        </q-card-section>
      </q-card>
    </router-link>

    <div
      class="grid-container q-mx-auto q-mt-xl row items-center"
      style="max-width: 66%"
    >
      <div class="grid-item" v-for="post in blogPosts" :key="post.id">
        <q-card flat class="col my-card my-font-2">
          <div class="" style="border-radius: 5px">
            <router-link
              :to="{
                name: 'post',
                params: {
                  id: post.id,
                  ...post,
                },
              }"
            >
              <q-img
                src="~/src/assets/hero2.jpg"
                style="border-radius: 15px"
              ></q-img>
            </router-link>
          </div>

          <div class="q-my-sm q-pt-md">{{ post.tag }}</div>

          <div class="text-h6 q-pa-none q-mb-sm">{{ post.title }}</div>

          <div>
            {{ post.content }}
          </div>

          <div class="row my-font">
            <div>{{ formatDate(post.timestamp) }}</div>
            <div class="blog-card-dot q-px-xs">‧</div>
            <div>{{ post.author }}</div>
          </div>
        </q-card>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue"; // Import ref and onMounted from Vue
import { useRouter } from "vue-router";
import "dayjs";

export default {
  components: {
    blogpost: require("./blogpost.vue").default,
  },
  setup() {
    // Define a ref to store the list of blog posts
    const blogPosts = ref([]);
    const featuredPost = ref({});
    const router = useRouter();

    // Fetch blog posts and update the blogPosts ref
    const fetchBlogPosts = async () => {
      // Replace this with your actual fetching logic from Supabase
      blogPosts.value = [
        {
          id: 1,
          tag: "Coastal Geomorphology",
          title: "Understanding Coastal Geomorphology: A Primer",
          content:
            "Explore the basics of coastal geomorphology, including the processes that shape coastal landforms and their significance in coastal management.",
          author: "Sarah Smith",
          timestamp: "2023-09-10T08:30:00Z",
        },
        {
          id: 2,
          tag: "Shoreline Mapping",
          title: "Advances in Shoreline Mapping Techniques",
          content:
            "Learn about the latest technologies and methodologies used for precise shoreline mapping and monitoring coastal changes.",
          author: "Michael Johnson",
          timestamp: "2023-09-12T14:15:00Z",
        },
        {
          id: 3,
          tag: "Coastal Erosion",
          title: "Coastal Erosion: Causes, Effects, and Mitigation Strategies",
          content:
            "Delve into the reasons behind coastal erosion, its environmental impacts, and strategies for mitigating its effects.",
          author: "Emily Davis",
          timestamp: "2023-09-15T11:45:00Z",
        },
        {
          id: 4,
          tag: "Benthic Habitat",
          title:
            "Exploring Benthic Habitats: The Hidden Ecosystems of Coastal Waters",
          content:
            "Discover the diverse and vital ecosystems that exist in coastal benthic habitats and their ecological importance.",
          author: "Mark Anderson",
          timestamp: "2023-09-18T09:20:00Z",
        },
        {
          id: 5,
          tag: "Coastal Land Use",
          title:
            "Coastal Land Use Planning: Balancing Development and Conservation",
          content:
            "Examine the challenges and strategies involved in sustainable land use planning along coastlines to balance development and conservation.",
          author: "Jennifer Lee",
          timestamp: "2023-09-20T15:10:00Z",
        },
        {
          id: 6,
          tag: "Coastal Geomorphology",
          title: "The Role of Remote Sensing in Coastal Geomorphology Research",
          content:
            "Explore how remote sensing technologies contribute to coastal geomorphology research and monitoring coastal changes.",
          author: "David Clark",
          timestamp: "2023-09-22T12:55:00Z",
        },
        {
          id: 7,
          tag: "Shoreline Mapping",
          title: "Shoreline Mapping for Disaster Preparedness and Response",
          content:
            "Learn how accurate shoreline mapping aids in disaster preparedness and response by identifying vulnerable areas and improving evacuation plans.",
          author: "Maria Rodriguez",
          timestamp: "2023-09-25T09:40:00Z",
        },
        {
          id: 8,
          tag: "Coastal Erosion",
          title:
            "Coastal Erosion Case Study: Managing Erosion Risks in Coastal Communities",
          content:
            "Explore a real-world case study of coastal erosion management strategies implemented in a vulnerable coastal community.",
          author: "Thomas Brown",
          timestamp: "2023-09-27T14:30:00Z",
        },
        {
          id: 9,
          tag: "Benthic Habitat",
          title: "Benthic Habitat Conservation: Challenges and Success Stories",
          content:
            "Dive into the conservation efforts and success stories in protecting and restoring benthic habitats around the world.",
          author: "Laura Miller",
          timestamp: "2023-09-29T10:20:00Z",
        },
        {
          id: 10,
          tag: "Coastal Land Use",
          title:
            "Coastal Land Use Regulations and Their Impact on Coastal Communities",
          content:
            "Discuss the regulatory frameworks governing coastal land use and their implications for coastal communities.",
          author: "Daniel White",
          timestamp: "2023-10-02T08:15:00Z",
        },
      ];
    };

    function getLatestBlogPost() {
      // Sort the blogPosts array by timestamp in descending order
      const sortedPosts = blogPosts.value.sort((a, b) => {
        return new Date(b.timestamp) - new Date(a.timestamp);
      });

      featuredPost.value = sortedPosts[0];
      // // Return the first (most recent) blog post
      // return sortedPosts[0];
    }

    // Fetch blog posts when the component is mounted
    onMounted(() => {
      fetchBlogPosts().then(() => {
        getLatestBlogPost();
      });
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

    // Return data and methods for the template
    return {
      blogPosts,
      featuredPost,
      formatDate,
      navigateToPost: (postId) => {
        // Navigate to the individual post by pushing the route to the router
        router.push(`/blog/${postId}`);
      },
      items: [
        { id: 1, text: "Item 1" },
        { id: 2, text: "Item 2" },
        { id: 3, text: "Item 3" },
        { id: 4, text: "Item 4" },
        { id: 5, text: "Item 5" },
        // Add more items as needed
      ],
    };
  },
};
</script>

<style>
::-webkit-scrollbar {
  width: 0em; /* Adjust as needed */
}

::-webkit-scrollbar-track {
  background: transparent; /* Set to the background color of your page */
}

::-webkit-scrollbar-thumb {
  background: transparent; /* Set to the background color of your page */
  border: none;
}

/* Optional: Hover styles for the thumb */
::-webkit-scrollbar-thumb:hover {
  background: transparent; /* Set to a different color for hover effect if desired */
}

.grid-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.grid-item {
  width: calc(33.33% - 16px); /* Adjust the width as needed */
  margin-bottom: 16px;
}

.hover-link {
  color: initial; /* Set the initial color for the link */
  text-decoration: none; /* Underline the link on hover */
  transition: color 0.3s; /* Add a smooth color transition */
}

.hover-link:hover {
  color: #21e7bc; /* Change the color on hover to your desired color (e.g., red) */
  text-decoration: none;
}

@media (max-width: 768px) {
  .grid-item {
    width: calc(50% - 16px); /* Adjust the width for smaller screens */
  }
}
</style>
