<template>
  <a href="/" class="blog-item">
    <div class="blog-img">
      <img src="../../../assets/images/blog-image-header/1690078070.jpg" alt="blog-img" />
    </div>
    <h5>blog.title</h5>
    blog.content
  </a>
</template>

<script>
export default {
  name: "BlogItem",
};
</script>

<style lang="scss" scoped>
.blog-content-inner .blog-item {
  width: calc(100% / 3 - 13.33px);
  text-decoration: none;
  color: black;
}

.blog-item .blog-img {
  width: 100%;
  height: 300px;
  padding-bottom: 30px;
}

.blog-item .blog-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 20px;
}

.blog-item h5 {
  max-height: 80px;
  font-size: 22px;
  font-weight: 500;
}

.blog-item p {
  color: #767676;
  min-height: 48px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  text-align: justify;
  margin-bottom: 40px;
}
</style>
