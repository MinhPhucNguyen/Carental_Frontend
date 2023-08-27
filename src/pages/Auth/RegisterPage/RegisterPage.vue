<template>
   <div class="col-md-4 mx-auto mb-4">
      <div class="card">
         <div class="card-header text-center bg-white">
            <h3 class="text-dark">Đăng ký</h3>
         </div>
         <div class="card-body">
            <form @submit.prevent="registerSubmit()" class="row" id="register-form">
               <div class="form-group col-md-6 mb-2">
                  <label for="firstname" class="col-form-label text-md-right fw-bold">Tên</label>
                  <div class="col-md-12">
                     <input
                        v-model="formRegister.firstname"
                        type="text"
                        class="form-control"
                        id="firstname"
                     />
                     <small v-if="errors.firstname" class="text-danger">
                        {{ errors.firstname[0] }}
                     </small>
                  </div>
               </div>
               <div class="form-group col-md-6 mb-2">
                  <label for="lastname" class="col-form-label text-md-right fw-bold">Họ</label>
                  <div class="col-md-12">
                     <input
                        v-model="formRegister.lastname"
                        type="text"
                        class="form-control"
                        id="lastname"
                     />
                     <small v-if="errors.lastname" class="text-danger">
                        {{ errors.lastname[0] }}
                     </small>
                  </div>
               </div>
               <div class="form-group mb-2">
                  <label for="" class="fw-bolder">Giới tính</label>
                  <div>
                     <div class="form-check d-inline-block">
                        <input
                           v-model="formRegister.gender"
                           class="form-check-input"
                           type="radio"
                           id="male"
                           value="1"
                        />
                        <label class="form-check-label" for="male"> Nam </label>
                     </div>
                     <div style="width: 10px; display: inline-block"></div>
                     <div class="form-check d-inline-block">
                        <input
                           v-model="formRegister.gender"
                           class="form-check-input"
                           type="radio"
                           id="female"
                           value="0"
                        />
                        <label class="form-check-label" for="female"> Nữ </label>
                     </div>
                  </div>
               </div>
               <div class="form-group col-md-6 mb-2">
                  <label for="username" class="col-md-12 col-form-label text-md-right fw-bold"
                     >Tên đăng nhập</label
                  >
                  <div class="col-md-12">
                     <input
                        v-model="formRegister.username"
                        id="username"
                        type="text"
                        class="form-control"
                     />
                     <small v-if="errors.username" class="text-danger">
                        {{ errors.username[0] }}
                     </small>
                  </div>
               </div>

               <div class="form-group col-md-6 mb-2">
                  <label for="phone" class="col-md-12 col-form-label text-md-right fw-bold"
                     >Số điện thoại</label
                  >
                  <div class="col-md-12">
                     <input
                        v-model="formRegister.phone"
                        id="phone"
                        type="text"
                        class="form-control"
                     />
                     <small v-if="errors.phone" class="text-danger">
                        {{ errors.phone[0] }}
                     </small>
                  </div>
               </div>

               <div class="form-group mb-2">
                  <label for="email" class="col-md-3 col-form-label text-md-right fw-bold"
                     >Email</label
                  >
                  <div class="col-md-12">
                     <input
                        v-model="formRegister.email"
                        id="email"
                        type="text"
                        class="form-control"
                     />
                     <small v-if="errors.email" class="text-danger">
                        {{ errors.email[0] }}
                     </small>
                  </div>
               </div>

               <div class="form-group mb-2">
                  <label for="address" class="col-md-3 col-form-label text-md-right fw-bold"
                     >Địa chỉ</label
                  >
                  <div class="col-md-12">
                     <input
                        v-model="formRegister.address"
                        id="address"
                        type="text"
                        class="form-control"
                     />
                     <small v-if="errors.address" class="text-danger">
                        {{ errors.address[0] }}
                     </small>
                  </div>
               </div>

               <div class="form-group col-md-6 mb-4">
                  <label for="password" class="col-md-12 col-form-label text-md-right fw-bold"
                     >Mật khẩu</label
                  >
                  <div class="col-md-12">
                     <input
                        v-model="formRegister.password"
                        id="password"
                        type="password"
                        class="form-control"
                     />
                     <small v-if="errors.password" class="text-danger">
                        {{ errors.password[0] }}
                     </small>
                  </div>
               </div>

               <div class="form-group col-md-6 mb-4">
                  <label
                     for="confirm_password"
                     class="col-md-12 col-form-label text-md-right fw-bold"
                     >Nhập lại mật khẩu</label
                  >
                  <div class="col-md-12">
                     <input
                        v-model="formRegister.confirm_password"
                        id="confirm_password"
                        type="password"
                        class="form-control"
                     />
                     <small v-if="errors.confirm_password" class="text-danger">
                        {{ errors.confirm_password[0] }}
                     </small>
                  </div>
               </div>
               <div class="form-group mb-2">
                  <div class="col-md-12">
                     <button
                        type="submit"
                        class="btn btn-lg fw-bold text-white mb-4 signup-btn"
                        name="register-btn"
                     >
                        Đăng ký
                     </button>
                  </div>
               </div>
               <hr />
            </form>
         </div>
      </div>
   </div>
</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router";
import axios from "axios";

export default {
   name: "RegisterPage",
   setup() {
      const formRegister = ref({
         firstname: "",
         lastname: "",
         username: "",
         password: "",
         gender: 1,
         phone: "",
         email: "",
         address: "",
         confirm_password: "",
      });
      const errors = ref({});
      const router = useRouter();

      const registerSubmit = async () => {
         await axios
            .post("register", formRegister.value)
            .then(() => {
               router.push({ name: "login" });
            })
            .catch((error) => {
               errors.value = error.response.data.errors;
            });
      };

      return {
         formRegister,
         errors,
         registerSubmit,
      };
   },
};
</script>

<style scoped>
.card-body {
   margin-top: 5px;
}
input[type="radio"]:checked {
   background-color: #1cc88a;
   border-color: #1cc88a;
}
.signup-btn {
   width: 100%;
   background: #1cc88a;
}
.signup-btn:hover {
   background: #26b480;
}
</style>
