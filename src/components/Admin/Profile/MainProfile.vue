<template>
   <div
      class="toast align-items-center shadow"
      role="toast"
      aria-live="assertive"
      aria-atomic="true"
   >
      <div class="toast-content d-flex p-0">
         <div class="d-flex align-items-center mr-3 fs-5">
            <i class="fa-solid fa-circle-check"></i>
         </div>
         <div class="toast-body p-0 fw-bold mw-50">
            <p class="m-0">{{ successMessage }}</p>
         </div>
         <div class="close-btn">
            <button
               type="button"
               class="btn-close btn-close-white me-2 m-auto"
               data-bs-dismiss="toast"
               aria-label="Close"
            ></button>
         </div>
      </div>
   </div>

   <div id="profile" class="section">
      <div class="view-right-item rounded-3 border d-flex justify-content-between">
         <div class="d-flex">
            <div class="image-avatar-container text-center">
               <div class="image-avatar">
                  <img
                     :src="user.avatar"
                     alt="avatar default"
                     class="rounded-circle"
                     style="object-fit: cover"
                  />
               </div>

               <div v-if="user.role_as === 1" class="image-avatar-upload">
                  <div class="dropdown">
                     <button
                        class="btn btn-sm btn-outline-success fw-bold mt-2"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                     >
                        Avatar
                     </button>
                     <ul class="dropdown-menu p-2">
                        <li>
                           <button
                              class="dropdown-item btn change-avatar-btn fw-bolder"
                              @click="openAvatarInput"
                           >
                              Change
                           </button>
                        </li>
                        <li>
                           <a
                              href=""
                              class="dropdown-item btn remove-avatar-btn text-danger fw-bolder"
                              >Remove</a
                           >
                        </li>
                     </ul>
                  </div>
                  <input
                     id="avatar-file-input"
                     name="avatar-input"
                     type="file"
                     style="display: none"
                     ref="fileInput"
                     @change="uploadAvatar"
                  />
               </div>
            </div>
            <div class="info ml-4">
               <p class="fs-4 fw-bolder text-dark mb-1">
                  {{ user.firstname + " " + user.lastname }}
               </p>
               <p
                  class="fw-bolder mb-1"
                  :class="user.role_as === 1 ? 'text-danger' : 'text-success'"
               >
                  {{ user.role_as === 1 ? "Admin" : "User" }}
               </p>
               <p class="fs-6 fw-bolder text-secondary">{{ user.address }}</p>
               <router-link
                  :to="{ name: 'admin.users.sendEmail' }"
                  class="btn btn-success fw-bold mt-3 send-email-btn"
               >
                  <i class="fa-solid fa-envelope"></i>
                  <span class="ml-2 fw-bold" style="font-size: 14px">SEND EMAIL</span>
               </router-link>
            </div>
         </div>
         <div class="edit-user-btn d-flex align-items-center">
            <router-link
               :to="{ name: 'admin.users.edit', params: { id: user.id } }"
               class="edit-btn-in-view bg-transparent fw-bold mr-4"
            >
               <span class="mr-2">Edit</span>
               <i class="fa-solid fa-user-pen"></i>
            </router-link>
         </div>
      </div>
      <div class="view-right-item rounded-3 border d-flex justify-content-between mt-4 mb-4">
         <div class="w-75">
            <p class="fw-bolder text-dark mb-4">User information</p>
            <div class="user-info-container">
               <div class="row d-flex w-100 mb-2">
                  <div class="user-info-item-left pr-4 w-50">
                     <p class="mb-1 user-info-title">Firstname</p>
                     <p class="user-info">{{ user.firstname }}</p>
                  </div>
                  <div class="user-info-item-right w-50">
                     <p class="mb-1 user-info-title">Lastname</p>
                     <p class="user-info">{{ user.lastname }}</p>
                  </div>
               </div>
               <div class="row d-flex w-100 mb-2">
                  <div class="user-info-item-left pr-4 w-50">
                     <p class="mb-1 user-info-title">Username</p>
                     <p class="user-info">{{ user.username }}</p>
                  </div>
                  <div class="user-info-item-right w-50">
                     <p class="mb-1 user-info-title">Gender</p>
                     <p class="user-info">{{ user.gender === 1 ? "Male" : "Female" }}</p>
                  </div>
               </div>
               <div class="row d-flex w-100 mb-2">
                  <div class="user-info-item-left pr-4 w-50">
                     <p class="mb-1 user-info-title">Email Address</p>
                     <p class="user-info">{{ user.email }}</p>
                  </div>
                  <div class="user-info-item-right w-50">
                     <p class="mb-1 user-info-title">Phone Number</p>
                     <p class="user-info">{{ user.phone }}</p>
                  </div>
               </div>
               <div class="row d-flex w-100 mb-2">
                  <div class="user-info-item-left pr-4 w-50">
                     <p class="mb-1 user-info-title">Address</p>
                     <p class="user-info">{{ user.address }}</p>
                  </div>
               </div>
            </div>
         </div>
         <div class="edit-user-btn d-flex align-items-center">
            <router-link
               :to="{ name: 'admin.users.edit', params: { id: user.id } }"
               class="edit-btn-in-view bg-transparent fw-bold mr-4"
            >
               <span class="mr-2">Edit</span>
               <i class="fa-solid fa-user-pen"></i>
            </router-link>
         </div>
      </div>
      <div class="view-right-item rounded-3 border d-flex justify-content-between">
         <div class="w-75">
            <p class="fw-bolder text-dark mb-4">Car Rental Information</p>
            <div class="car-rental-info-container">
               <p class="text-warning fw-bold">There are no rental cars</p>
            </div>
         </div>
      </div>
   </div>
</template>

<script>
import { computed, ref } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

export default {
   name: "MainProfile",
   setup() {
      const store = useStore();
      const router = useRouter();
      const user = computed(() => store.getters["users/getUserById"]);
      const fileInput = ref(null);
      const successMessage = ref(null);

      const openAvatarInput = () => {
         fileInput.value.click();
      };

      const uploadAvatar = (event) => {
         const file = event.target.files[0];
         const id = router.currentRoute.value.params.id;

         const formData = new FormData(); //tạo đối tượng form data để gửi file lên server giống với form thông thường có method="post" và enctype="multipart/form-data"
         formData.append("profile_avatar", file);

         store.dispatch("users/updateAvatar", { id, formData }).then((response) => {
            successMessage.value = response.data.message;
            $(".toast").toast("show");
         });
      };

      return {
         user,
         fileInput,
         openAvatarInput,
         uploadAvatar,
         successMessage,
      };
   },
};
</script>

<style></style>
