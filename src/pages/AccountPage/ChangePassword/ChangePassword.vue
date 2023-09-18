<template>
   <div class="content-title">
      <h4 class="fs-1 fw-bold">Đổi mật khẩu</h4>
      <p class="fs-5 mb-0">Vui lòng nhập mật khẩu hiện tại của bạn để thay đổi mật khẩu</p>
   </div>
   <div class="content-item change-pw">
      <div class="title fs-3 text-black mb-4">Nhập mật khẩu</div>
      <div class="content">
         <form @submit.prevent="changePassword">
            <div class="custom-input mb-4">
               <div class="wrap-info fw-bold mb-1">Mật khẩu hiện tại</div>
               <div class="wrap-input w-100">
                  <input type="password" name="ip_old_pw" v-model="model.old_pw" />
                  <i
                     class="fa-regular fa-eye-slash fs-5"
                     @click="showPw($refs.eye1)"
                     ref="eye1"
                  ></i>
               </div>
            </div>
            <div class="custom-input mb-4">
               <div class="wrap-info fw-bold mb-1">Mật khẩu mới</div>
               <div class="wrap-input w-100">
                  <input type="password" name="ip_new_pw" v-model="model.new_pw" />
                  <i
                     class="fa-regular fa-eye-slash fs-5"
                     @click="showPw($refs.eye2)"
                     ref="eye2"
                  ></i>
               </div>
            </div>
            <div class="custom-input mb-4">
               <div class="wrap-info fw-bold mb-1">Xác nhận mật khẩu mới</div>
               <div class="wrap-input w-100">
                  <input type="password" name="ip_new_pw_confirm" v-model="model.confirm_new_pw" />
                  <i
                     class="fa-regular fa-eye-slash fs-5"
                     @click="showPw($refs.eye3)"
                     ref="eye3"
                  ></i>
               </div>
            </div>
            <div class="confirm-button">
               <button type="submit" class="btn btn-primary">Xác nhận</button>
            </div>
         </form>
      </div>
   </div>
</template>

<script setup>
import { computed, ref } from "vue";
import { useStore } from "vuex";
import axios from "axios";

const model = ref({
   old_pw: "",
   new_pw: "",
   confirm_new_pw: "",
});
const store = useStore();

const user = computed(() => store.getters["auth/getUser"]);
console.log(user.value);
const id = user.value.id;
const changePassword = async () => {
   await axios
      .patch(`v2/users/${id}/reset-password`, model.value)
      .then((response) => {
         console.log(response.data);
      })
      .catch((error) => {
         alert(error.response.data.message);
      });
};

/**
 * TODO: SHOW/HIDE PASSWORD
 */
const showPw = (icon) => {
   const input = icon.previousSibling;
   if (input.type === "password") {
      input.type = "text";
      icon.classList.remove("fa-eye-slash");
      icon.classList.add("fa-eye");
   } else {
      input.type = "password";
      icon.classList.remove("fa-eye");
      icon.classList.add("fa-eye-slash");
   }
};
</script>

<style scoped>
@import url("./ChangePassword.scss");
</style>
