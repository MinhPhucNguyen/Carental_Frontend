<template>
   <my-modal @logout="logout()" idModal="logout">
      <template v-slot:title>Đăng xuất</template>
      <h6 class="text-dark text-center fs-5 mt-4">Bạn có chắc chắn muốn đăng xuất ?</h6>
      <template v-slot:buttonName>Đăng xuất</template>
   </my-modal>

   <div class="account-section" v-if="user">
      <div class="account-container">
         <div class="sidebar-account">
            <div>
               <div style="padding-bottom: 0px"></div>
               <div class="sidebar-sticky">
                  <div class="title fw-bold fs-1 mb-4">Xin chào bạn!</div>
                  <div class="sidebar">
                     <router-link
                        to="/account"
                        class="sidebar-item"
                        rel="page"
                        :class="{ active: activeItem === 'account' }"
                        @click="setActiveItem('account')"
                     >
                        <i class="fa-solid fa-user"></i>
                        <p>Tài khoản của tôi</p>
                     </router-link>
                     <router-link
                        to="/myfavs"
                        class="sidebar-item"
                        rel="page"
                        :class="{ active: activeItem === 'myfavs' }"
                        @click="setActiveItem('myfavs')"
                     >
                        <i class="fa-solid fa-heart"></i>
                        <p>Xe yêu thích</p>
                     </router-link>
                     <router-link
                        to="/resetpw"
                        class="sidebar-item"
                        rel="page"
                        :class="{ active: activeItem === 'resetpw' }"
                        @click="setActiveItem('resetpw')"
                     >
                        <i class="fa-solid fa-lock"></i>
                        <p>Đổi mật khẩu</p>
                     </router-link>

                     <router-link
                        to="admin/dashboard"
                        class="sidebar-item"
                        v-if="user && user.role_as === 1"
                     >
                        <i class="fa-solid fa-user-gear"></i>
                        <p>Admin</p>
                     </router-link>
                     <a
                        class="sidebar-item text-danger"
                        data-bs-toggle="modal"
                        data-bs-target="#logoutModal"
                     >
                        <i class="fa-solid fa-arrow-left"></i>
                        <p>Đăng xuất</p>
                     </a>
                  </div>
               </div>
            </div>
         </div>
         <div id="account-content">
            <router-view></router-view>
         </div>
      </div>
   </div>
</template>

<script>
import { ref, computed } from "vue";
import { useStore } from "vuex";
import myModal from "@/components/Modal/Modal.vue";
import { useRouter } from "vue-router";

export default {
   name: "AccountPage",
   components: {
      myModal,
   },
   setup() {
      const store = useStore();
      const router = useRouter();
      const user = computed(() => store.getters["auth/getUser"]);
      const activeItem = ref("account");

      const setActiveItem = (item) => {
         activeItem.value = item;
      };

      const logout = () => {
         store.dispatch("auth/logout").then(() => {
            $("#logoutModal").modal("hide");
            router.push({ name: "login" });
         });
      };

      return {
         activeItem,
         setActiveItem,
         logout,
         user,
      };
   },
};
</script>

<style scoped>
@import url("./AccountPage.scss");
</style>
