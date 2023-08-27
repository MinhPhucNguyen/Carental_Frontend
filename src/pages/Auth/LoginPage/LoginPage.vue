<template>
   <div class="col-md-4 mx-auto">
      <div class="card" style="margin-top: 100px">
         <div class="card-header text-center bg-white">
            <h3 class="text-dark">Đăng nhập</h3>
         </div>
         <div class="card-body mx-auto" style="width: 500px">
            <alert-message
               @close-alert="closeGlobalError"
               v-if="errors && errors.global"
               type="danger"
               >{{ errors.global }}</alert-message
            >
            <form @submit.prevent="loginSubmit()" id="login-form">
               <div class="form-group row mb-2">
                  <label for="username" class="col-md-3 col-form-label text-md-right fw-bold w-100"
                     >Tên Đăng nhập</label
                  >
                  <div class="col-md-12">
                     <input
                        id="username"
                        type="text"
                        class="form-control p-2"
                        :class="{ 'is-invalid': errors && errors.username }"
                        v-model="credentials.username"
                        @input="clearError('username')"
                        autofocus
                     />
                     <small v-if="errors && errors.username" class="text-danger">
                        {{ errors.username[0] }}
                     </small>
                  </div>
               </div>
               <div class="form-group row mb-1">
                  <label for="password" class="col-md-3 col-form-label text-md-right fw-bold"
                     >Mật khẩu</label
                  >
                  <div class="col-md-12">
                     <input
                        id="password"
                        type="password"
                        class="form-control p-2"
                        :class="{ 'is-invalid': errors && errors.password }"
                        v-model="credentials.password"
                        @input="clearError('password')"
                        autofocus
                     />
                     <small v-if="errors && errors.password" class="text-danger">
                        {{ errors.password[0] }}
                     </small>
                  </div>
               </div>
               <p class="" style="text-align: right">
                  <a href="" style="color: #1cc88a; text-decoration: none">Quên Mật khẩu ?</a>
               </p>
               <div class="form-group row mb-3">
                  <div class="col-md-12">
                     <button
                        type="submit"
                        class="btn btn-lg w-100 fw-bold text-white d-flex justify-content-center align-items-center login-btn"
                     >
                        <div
                           class="spinner-grow text-light"
                           v-if="isLoading"
                           style="width: 2rem; height: 2rem; margin-right: 10px"
                           role="status"
                        >
                           <span class="visually-hidden">Loading...</span>
                        </div>
                        <span v-else> Đăng nhập </span>
                     </button>
                  </div>
               </div>
            </form>
            <div class="form-group mb-0 d-flex justify-content-center">
               <p class="text-secondary">
                  Bạn chưa là thành viên ?
                  <router-link
                     to="/register"
                     class="fw-bold text-decoration-none"
                     style="color: #1cc88a"
                     >Đăng ký ngay</router-link
                  >
               </p>
            </div>
            <hr />
         </div>
      </div>
   </div>
</template>

<script>
import { ref } from "vue";
import AlertMessage from "@/components/Alert/AlertMessage.vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

export default {
   name: "LoginPage",
   components: {
      AlertMessage,
   },
   setup() {
      const store = useStore();
      const credentials = ref({
         username: "",
         password: "",
      });
      const isLoading = ref(false);
      const errors = ref(null);
      const router = useRouter();

      const loginSubmit = () => {
         isLoading.value = true;
         store
            .dispatch("auth/login", credentials.value)
            .then(() => {
               router.push({ name: "home" });
               isLoading.value = false;
            })
            .catch((e) => {
               errors.value = e.response.data.errors;
               if (!errors.value.username && !errors.value.password) {
                  errors.value = { global: e.response.data.errors };
               }
               isLoading.value = false;
            });
      };

      const clearError = (field) => {
         if (errors.value) {
            delete errors.value[field];
            errors.value = null;
         }
      };

      const closeGlobalError = () => {
         errors.value = null;
      };

      return {
         credentials,
         loginSubmit,
         errors,
         closeGlobalError,
         clearError,
         isLoading,
      };
   },
};
</script>

<style lang="scss" scoped>
.login-btn {
   background: #1cc88a;

   &:hover {
      background: #26b480;
   }
}
</style>
