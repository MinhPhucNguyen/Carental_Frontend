<template>
  <main-navbar />
  <main class="main">
    <div class="content-container">
      <router-view></router-view>
    </div>
  </main>
  <main-footer />
</template>

<script>
import MainNavbar from "./components/Navbar/Navbar.vue";
import MainFooter from "./components/Footer/Footer.vue";

export default {
  name: "App",
  components: {
    MainNavbar,
    MainFooter,
  },
};
</script>

<style></style>
