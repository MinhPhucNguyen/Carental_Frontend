<template>
  <main-navbar />
  <main class="main">
    <div class="content-container">
      <home-page />
    </div>
  </main>
  <main-footer />
</template>

<script>
import MainNavbar from "./components/Nav/Navbar.vue";
import MainFooter from "./components/Footer/Footer.vue";
import HomePage from "./pages/HomePage/HomePage.vue";

export default {
  name: "App",
  components: {
    MainNavbar,
    MainFooter,
    HomePage,
  },
};
</script>

<style>

</style>
