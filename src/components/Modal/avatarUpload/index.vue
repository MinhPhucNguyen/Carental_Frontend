<template>
   <div
      class="modal fade"
      id="avatarModal"
      tabindex="-1"
      aria-labelledby="avatarModalLabel"
      aria-hidden="true"
   >
      <div class="modal-dialog">
         <div class="modal-content">
            <div class="modal-header border-0">
               <button
                  type="button"
                  class="btn-close border border-3 rounded-circle"
                  data-bs-dismiss="modal"
                  aria-label="Close"
               ></button>
            </div>
            <div class="modal-body text-center">
               <h1 class="modal-title fs-3 text-center" id="avatarModalLabel">
                  Cập nhật ảnh đại diện
               </h1>
               <input
                  type="file"
                  name="ip_upload_avatar"
                  class="d-none"
                  @change="handleImageChange"
               />
               <button
                  type="button"
                  class="btn btn-primary choose-avatar-btn hover-shadow rounded-pill border-0 text-uppercase"
                  style="
                     margin: 40px auto;
                     background: #1cc88a;
                     padding: 16px 24px;
                     font-weight: 500;
                  "
                  @click="uploadAvatar()"
               >
                  Chọn hình
               </button>
               <div v-if="imageUrl" class="new-avatar-container mt-2">
                  <img :src="imageUrl" alt="" class="avatar" />
                  <a
                     class="btn btn-danger fw-bold w-100 p-3 border-0 fs-5"
                     style="background: #1cc88a"
                  >
                     Cập nhật
                  </a>
               </div>
            </div>
         </div>
      </div>
   </div>
</template>

<script>
import { ref } from "vue";

export default {
   name: "avatarUpload",
   setup() {
      const imageUrl = ref(null);

      const uploadAvatar = () => {
         const input = document.querySelector('input[name="ip_upload_avatar"]');
         input.click();
      };

      const handleImageChange = (e) => {
         const selectedFile = e.target.files[0];
         if (selectedFile) {
            imageUrl.value = URL.createObjectURL(selectedFile);
         }
      };

      return {
         imageUrl,
         uploadAvatar,
         handleImageChange,
      };
   },
};
</script>

<style scoped>
.avatar {
   width: 100%;
   height: 300px;
   margin-bottom: 20px;
}
</style>
