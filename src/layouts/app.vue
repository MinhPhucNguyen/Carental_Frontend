<template>
   <MainNavbar v-if="!$route.meta.hideNavbar" />
   <main class="main">
      <div class="content-container" @click="check">
         <router-view></router-view>
      </div>
   </main>
   <MainFooter v-if="!$route.meta.hideFooter" />
</template>

<script setup>
import MainNavbar from "@/components/Navbar/Navbar.vue";
import MainFooter from "@/components/Footer/Footer.vue";
</script>

<style>
.content-container {
   position: relative;
   height: 100%;
   min-height: 100vh;
}
</style>
