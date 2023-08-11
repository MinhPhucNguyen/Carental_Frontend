<template>
  <div class="blog-page w-100 h-100">
    <div class="blog-container">
      <h1 class="blog-title fw-bold">
        CA<span style="color: #1cc88a">R</span>ENTAL BLOG
      </h1>
      <div class="blog-latest w-100 d-flex">
        <div class="blog-latest-main">
          <a href="" class="d-inline-block w-100">
            <img
              src="../../assets/images/blog-image-header/1690078070.jpg"
              alt=""
              class="w-100"
            />
            <h5>mainLatestBlog.title</h5>
          </a>
          getDisc(mainLatestBlog.content)
        </div>
        <div class="blog-latest-other">
          <a href="/" class="blog-latest-other-item">
            <img src="../../assets/images/blog-image-header/1690078070.jpg" alt="" />
            <div class="content">
              <h6>${blog.title}</h6>
              ${getDisc(blog.content)}
            </div>
          </a>
          <a href="/" class="blog-latest-other-item">
            <img src="../../assets/images/blog-image-header/1690078070.jpg" alt="" />
            <div class="content">
              <h6>${blog.title}</h6>
              ${getDisc(blog.content)}
            </div>
          </a>
          <a href="/" class="blog-latest-other-item">
            <img src="../../assets/images/blog-image-header/1690078070.jpg" alt="" />
            <div class="content">
              <h6>${blog.title}</h6>
              ${getDisc(blog.content)}
            </div>
          </a>
        </div>
      </div>
      <div class="blog-content">
        <div class="blog-content-inner">
          <blog-item />
          <blog-item />
          <blog-item />
          <blog-item />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BlogItem from "./BlogItem/BlogItem.vue";

export default {
  name: "BlogPage",
  components: { BlogItem },
};
</script>

<style scoped>
@import "./BlogPage.scss";
</style>
