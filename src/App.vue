<template>
  <MainNavbar />
  <main class="main">
    <div class="content-container">
      <HomePage />
    </div>
  </main>
  <MainFooter />
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
body #app {
  font-family: "Bebas Neue", sans-serif;
  font-family: "Poppins", sans-serif;
  font-family: "Roboto", sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
