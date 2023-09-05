<template>
   <nav class="navbar navbar-expand-lg">
      <div class="navbar-container text-dark p-0 d-flex">
         <router-link to="/" class="navbar-brand fw-bold text-uppercase fs-4" href="/">
            CA<span style="color: #1cc88a">R</span>ENTAL
         </router-link>
         <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="{{ __('Toggle navigation') }}"
         >
            <span class="navbar-toggler-icon"></span>
         </button>

         <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <!-- Right Side Of Navbar -->
            <ul class="navbar-nav ms-auto">
               <li class="nav-item">
                  <router-link to="/about" class="nav-link text-dark" href=""
                     >Về Chúng tôi</router-link
                  >
               </li>
               <li class="nav-item">
                  <router-link to="/" class="nav-link text-dark ">Trở thành chủ xe</router-link>
               </li>
               <li class="nav-item">
                  <router-link to="/blog" class="nav-link text-dark">Blog</router-link>
               </li>
               <li class="nav-item">
                  <span class="nav-item-border"></span>
               </li>

               <!-- Authentication Links -->
               <div class="authentication-container d-flex">
                  <router-link
                     v-if="isAuthenticated"
                     to="/account"
                     id="user-info"
                     class="text-dark fw-bold text-decoration-none"
                  >
                     <img
                        class="avatar-image"
                        :src="user.avatar"
                        alt="avatar"
                     />
                     {{ user.username }}
                  </router-link>
                  <ul v-else>
                     <li id="register-btn" class="nav-item m-0">
                        <router-link to="/register" class="nav-link text-dark btn"
                           >Đăng ký</router-link
                        >
                     </li>
                     <li id="login-btn" class="nav-item border border-dark rounded-3">
                        <router-link to="/login" class="nav-link text-dark btn"
                           >Đăng nhập</router-link
                        >
                     </li>
                  </ul>
               </div>
            </ul>
         </div>
      </div>
   </nav>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";

export default {
   name: "MainNavbar",
   setup() {
      const store = useStore();
      const isAuthenticated = computed(() => store.getters["auth/isAuthenticated"]);
      const user = computed(() => store.getters["auth/getUser"]);

      return {
         user,
         isAuthenticated,
      };
   },
};
</script>

<style lang="scss" scoped>
@import "./Navbar.scss";
</style>
