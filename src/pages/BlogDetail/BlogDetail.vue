<template>
  <div v-if="Object.keys(blog).length !== 0">
    <div class="blog-page w-100 h-100 bg-white border-top border-bottom">
      <div class="blog-detail-container">
        <img :src="blog.image" alt="" class="main-blog-image" />
        <div class="blog-detail-content">
          <h1>{{ blog.title }}</h1>
          <strong>Đăng vào: </strong> <span>{{ formatCreatedAt }}</span>
          <div class="content" v-html="blog.content"></div>
        </div>
      </div>
    </div>
  </div>
  <div v-else-if="errorMessage">{{ errorMessage }}</div>
  <div v-else>
    <state-loading/>
  </div>
</template>

<script>
import stateLoading from "@/components/Loading/Loading.vue";
import { computed, onMounted, ref } from "vue";
import axios from "axios";
import { useRoute } from "vue-router";
export default {
  name: "BlogDetail",
  components:{
    stateLoading
  },
  setup() {
    const blog = ref({});
    const errorMessage = ref("");
    const route = useRoute();

    const getBlogContent = async () => {
      try {
        const response = await axios.get(
          `http://127.0.0.1:8000/api/v2/blogs/${route.params.slug}`
        );
        if (response.status === 200) {
          blog.value = response.data.data;
        }
      } catch (error) {
        errorMessage.value = error;
      }
    };

    onMounted(() => getBlogContent());

    const formatCreatedAt = computed(() => {
      const createdDate = new Date(blog.value.created_at);
      const currentDate = new Date();

      const timeDistance = currentDate.getTime() - createdDate.getTime();
      const daysAgo = Math.floor(timeDistance / (1000 * 3600 * 24));
      const dayDisplay =
        daysAgo == 0
          ? "Hôm nay"
          : daysAgo == 1
          ? "Hôm qua"
          : `${daysAgo} ngày trước`;
      return dayDisplay;
    });

    return {
      blog,
      errorMessage,
      formatCreatedAt,
    };
  },
};
</script>

<style lang="scss" scoped>
.blog-page {
  background: #f5f5f5;
}

.blog-detail-container {
  width: 80%;
  margin: 0 auto;
  padding: 80px 0;
}

.blog-detail-content {
  margin-top: 80px;
  padding: 0 50px;
}

.blog-detail-content h1 {
  line-height: 1.5;
  font-weight: bold;
  font-size: 50px;
  margin-bottom: 50px;
}

.blog-detail-content .content {
  margin-top: 20px;
}

.blog-detail-content > strong {
  color: #1cc88a;
}

.blog-detail-content .content p {
  margin-bottom: 40px;
}

.blog-detail-content .content p img {
  max-width: 800px;
  max-height: 400px;
  object-fit: cover;
}

.blog-detail-content .content h2 {
  font-size: 24px;
}
</style>
