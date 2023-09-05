<template>
   <div class="col-md-12">
      <div class="card p-0">
         <div class="card-header bg-dark">
            <div class="d-inline-block fw-bold text-white fs-4">Edit User</div>
            <router-link :to="{ name: 'admin.users' }" class="btn btn-danger fw-bold float-right">
               <i class="fa-solid fa-arrow-left"></i>
               BACK
            </router-link>
         </div>
         <div v-if="model" class="card-body p-4">
            <form @submit.prevent="editUser">
               <div class="row">
                  <input type="hidden" name="user_id" />
                  <div class="col-md-6 mb-3">
                     <label for="firstname">Firstname</label>
                     <input
                        type="text"
                        name="firstname"
                        class="form-control"
                        v-model="model.firstname"
                     />
                  </div>
                  <div class="col-md-6 mb-3">
                     <label for="lastname">Lastname</label>
                     <input
                        type="text"
                        name="lastname"
                        class="form-control"
                        v-model="model.lastname"
                     />
                  </div>
                  <div class="col-md-12 mb-3">
                     <label for="">Gender</label>
                     <div>
                        <div class="form-check d-inline-block">
                           <input
                              class="form-check-input"
                              type="radio"
                              name="gender"
                              id="male"
                              value="1"
                              :checked="model.gender === 1"
                           />
                           <label class="form-check-label" for="male"> Male </label>
                        </div>
                        <div style="width: 10px; display: inline-block"></div>
                        <div class="form-check d-inline-block">
                           <input
                              class="form-check-input"
                              name="gender"
                              type="radio"
                              id="female"
                              value="0"
                              :checked="model.gender === 0"
                           />
                           <label class="form-check-label" for="female"> Female </label>
                        </div>
                     </div>
                  </div>
                  <div class="col-md-6 mb-3">
                     <label for="username">Username</label>
                     <input
                        type="text"
                        name="username"
                        class="form-control"
                        v-model="model.username"
                     />
                  </div>
                  <div class="col-md-6 mb-3">
                     <label for="email">Email</label>
                     <input type="email" name="email" class="form-control" v-model="model.email" />
                  </div>
                  <div class="col-md-6 mb-3">
                     <label for="phone">Phone</label>
                     <input type="text" name="phone" class="form-control" v-model="model.phone" />
                  </div>
                  <div class="col-md-6 mb-3">
                     <label for="address">Address</label>
                     <input
                        type="text"
                        name="address"
                        class="form-control"
                        v-model="model.address"
                     />
                  </div>
                  <div class="col-md-6 mb-3">
                     <label for="password">Password</label>
                     <input
                        type="password"
                        name="password"
                        class="form-control"
                        placeholder="*Leave blank if you don't want to change password"
                        v-model="model.password"
                     />
                  </div>
                  <div class="col-md-6 mb-3">
                     <label for="confirm_password">Confirm Password</label>
                     <input
                        type="password"
                        name="confirm_password"
                        class="form-control"
                        placeholder="*Leave blank if you don't want to change password"
                        v-model="model.confirm_password"
                     />
                  </div>
                  <div class="col-md-6 mb-3">
                     <label for="role_as">Role as</label>
                     <select name="role_as" class="form-control">
                        <option value="">--Select Role--</option>
                        <option value="admin" :selected="model.role_as === 1">Admin</option>
                        <option value="user" :selected="model.role_as === 0">User</option>
                     </select>
                  </div>
                  <div>
                     <button name="create_btn" class="btn btn-success">Save changes</button>
                  </div>
               </div>
            </form>
         </div>
         <div v-else>
            <StateLoading />
         </div>
      </div>
   </div>
</template>

<script>
import { computed, onBeforeUnmount, onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import StateLoading from "@/components/Loading/Loading.vue";

export default {
   name: "EditUser",
   components: {
      StateLoading,
   },
   setup() {
      const store = useStore();
      const router = useRouter();
      const id = router.currentRoute.value.params.id;
      const model = ref();

      store.dispatch("users/resetUser");

      onMounted(() => {
         store.dispatch("users/fetchUserById", id).then(() => {
            model.value = store.getters["users/getUserById"];
         });
      });

      const editUser = () => {
         store.dispatch("users/editUser", { id, model: model.value }).then(() => {
            router.push({ name: "admin.users" });
         });
      };

      onBeforeUnmount(() => {
         store.dispatch("users/resetUser");
      });

      return {
         model,
         editUser,
      };
   },
};
</script>

<style></style>
