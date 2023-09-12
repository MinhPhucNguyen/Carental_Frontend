<template>
   <div v-if="users" class="col-md-12">
      <form action="" method="GET" class="w-25 m-0">
         <div class="mb-3 w-100 align-items-center">
            <div class="d-flex align-items-center w-50">
               <label for="filterBy" class="form-label mb-0 fw-bolder">Filter by Role As:</label>
            </div>
            <select name="filterBy" class="form-select w-50 mt-2 filter-by">
               <option value="all">All</option>
               <option value="0">User</option>
               <option value="1">Admin</option>
            </select>
         </div>
      </form>

      <div class="card">
         <div class="card-header bg-dark d-flex align-items-center">
            <div class="d-inline-block fw-bold text-white fs-4 flex-grow-1">Users List</div>
            <div>
               <router-link to="users/create" class="btn btn-success fw-bold float-right ml-3">
                  <i class="fa-solid fa-plus"></i>
                  Add New User
               </router-link>
            </div>
         </div>
         <div class="card-body mt-0">
            <table class="table table-bordered table-striped text-dark fw-bold">
               <thead>
                  <tr class="text-dark">
                     <th data-sort="id">
                        #
                        <span class="sort-id-icon float-end">
                           <i class="fa-solid fa-arrow-down"></i>
                           <i class="fa-solid fa-arrow-up text-muted"></i>
                        </span>
                     </th>
                     <th class="text-center">Fullname</th>
                     <th class="text-center">Username</th>
                     <th class="text-center">Gender</th>
                     <th class="text-center">Email</th>
                     <th class="text-center">Phone</th>
                     <th class="text-center">Address</th>
                     <th class="text-center">Role</th>
                     <th class="text-center">Action</th>
                  </tr>
               </thead>
               <tbody id="body-table">
                  <tr v-for="user in users" :key="user.id">
                     <td class="text-center">{{ user.id }}</td>
                     <td class="text-center">{{ user.firstname + " " + user.lastname }}</td>
                     <td class="text-center">
                        <a href="" class="text-success">{{ user.username }}</a>
                     </td>
                     <td class="text-center">{{ user.gender === 1 ? "Male" : "Female" }}</td>
                     <td class="text-center">{{ user.email }}</td>
                     <td class="text-center">{{ user.phone }}</td>
                     <td class="text-center">{{ user.address }}</td>
                     <td
                        class="text-center"
                        :class="{
                           'text-danger': user.role_as === 1,
                           'text-success': user.role_as !== 1,
                        }"
                     >
                        {{ user.role_as === 0 ? "User" : "Admin" }}
                     </td>

                     <td class="text-center">
                        <div class="dropdown">
                           <button
                              class="btn btn-success dropdown-toggle"
                              type="button"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                           >
                              Action
                           </button>
                           <ul class="dropdown-menu">
                              <li>
                                 <router-link
                                    :to="{ name: 'admin.users.profile', params: { id: user.id } }"
                                    class="dropdown-item mb-3 fs-6 text-warning bg-white"
                                 >
                                    <i class="fa-solid fa-eye"></i>
                                    <span class="ml-2">View Profile</span>
                                 </router-link>
                              </li>
                              <li>
                                 <router-link
                                    :to="{ name: 'admin.users.edit', params: { id: user.id } }"
                                    class="dropdown-item mb-3 fs-6 text-success bg-white"
                                 >
                                    <i class="fa-solid fa-user-pen"></i>
                                    <span class="ml-2">Edit</span>
                                 </router-link>
                              </li>
                              <li v-if="user.role_as !== 1">
                                 <button
                                    type="button"
                                    class="dropdown-item fs-6 text-danger bg-white"
                                    data-bs-toggle="modal"
                                    :data-bs-target="`#deleteConfirmModal${user.id}`"
                                 >
                                    <i class="fa-solid fa-trash"></i>
                                    <span class="ml-2">Delete</span>
                                 </button>
                              </li>
                           </ul>
                        </div>
                     </td>

                     <!-- Modal Delete Confirm -->
                     <my-modal
                        @clickTo="deleteUser(user.id)"
                        :idModal="`deleteConfirmModal${user.id}`"
                        bgColor="danger"
                     >
                        <template v-slot:title>Delete user</template>
                        <h6 class="text-dark text-center fs-5 mt-4">
                           Are you sure, you want to delete this user?
                        </h6>
                        <template v-slot:buttonName>Delete</template>
                     </my-modal>
                  </tr>
                  <tr v-if="users.length === 0">
                     <td colspan="9" class="text-center">
                        <stateLoading />
                     </td>
                  </tr>
               </tbody>
            </table>
            <div class="pagination"></div>
         </div>
      </div>
   </div>
</template>

<script setup>
import { computed, onBeforeMount } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import MyModal from "@/components/Modal/Modal.vue";
import stateLoading from "@/components/Loading/Loading.vue";

const store = useStore();
onBeforeMount(() => store.dispatch("users/fetchUsers"));
const users = computed(() => store.getters["users/getUserList"]);
const router = useRouter();

const deleteUser = (id) => {
   store
      .dispatch("users/deleteUser", id)
      .then(() => {
         router.push({ name: "admin.users" });
         $(`#deleteConfirmModal${id}`).modal("hide");
      })
      .catch((e) => {
         if (e.response) {
            alert(e.response.data.message);
         }
      });
};
</script>

<style></style>
