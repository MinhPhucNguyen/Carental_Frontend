<template>
   <main-navbar />
   <main class="main">
      <div class="content-container" @click="check">
         <router-view></router-view>
      </div>
   </main>
   <main-footer v-if="!$route.meta.hideFooter" />
</template>

<script>

import MainNavbar from "@/components/Navbar/Navbar.vue";
import MainFooter from "@/components/Footer/Footer.vue";

export default {
   name: "App",
   components: {
      MainNavbar,
      MainFooter,
   },
   setup() {
      return {};
   },
};
</script>

<style></style>
