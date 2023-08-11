<template>
  <main-navbar />
  <main class="main">
    <div class="content-container" @click="check">
      <router-view></router-view>
    </div>
  </main>
  <main-footer v-if="!isLoginPage && !isRegisterPage" />
</template>

<script>
import MainNavbar from "./components/Navbar/Navbar.vue";
import MainFooter from "./components/Footer/Footer.vue";
import { useRoute } from "vue-router";
import { ref } from "vue";
import { watch } from "vue";

export default {
  name: "App",
  components: {
    MainNavbar,
    MainFooter,
  },
  setup() {
    const isLoginPage = ref(false);
    const isRegisterPage = ref(false);
    const route = useRoute(); // useRoute() is a composition API function that returns the current route object. It is used to get the current route object outside of the setup() function.

    watch(route, (to) => {
      //watch() là một chức năng API sử dụng để theo dõi các thay đổi của một giá trị và thực thi một hàm mỗi khi giá trị đó thay đổi.
      isLoginPage.value = to.path === "/login";
      isRegisterPage.value = to.path === "/register";
    });

    return {
      isLoginPage,
      isRegisterPage,
    };
  },
};
</script>

<style></style>
