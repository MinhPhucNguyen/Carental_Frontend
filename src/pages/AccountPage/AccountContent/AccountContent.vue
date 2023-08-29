<template>
   <updateEmailModal />
   <updatePhoneNumberModal />
   <updateInfoModal />
   <avatarUpload />

   <div class="content-item user-profile">
      <div class="content-title d-flex align-items-center justify-content-between">
         <div class="title-edit d-flex align-items-center">
            <h5 class="fs-3 mb-0">Thông tin tài khoản</h5>
            <div
               class="wrap-edit-btn edit-account-btn"
               data-bs-toggle="modal"
               data-bs-target="#editAccountModal"
            >
               <i class="fa-solid fa-pen"></i>
            </div>
         </div>
         <div class="total-trips d-flex">
            <i class="fa-solid fa-suitcase-rolling fs-3"></i>
            <p class="count mb-0">0</p>
            <span>Chuyến</span>
         </div>
      </div>
      <div class="content w-100 d-flex justify-content-between">
         <div class="avatar-wrap">
            <div class="avatar">
               <div class="avatar-container" data-bs-toggle="modal" data-bs-target="#avatarModal">
                  <img src="@/assets/images/avatar/default.jpg" alt="avatar" />
               </div>
            </div>
            <h6 class="user-fullname">{{ user.firstname + " " + user.lastname }}</h6>
            <div class="note">
               Tham gia: <span>{{ dateJoin }}</span>
            </div>
            <div class="trip-class">
               <div>
                  <i class="fa-solid fa-medal fs-5"></i>
                  <p class="mb-0">0</p>
                  <span>điểm</span>
               </div>
            </div>
         </div>
         <div class="info-wrap h-100 d-flex flex-column">
            <div class="info-box">
               <div class="info-box-item d-flex justify-content-between align-items-center">
                  <p>Ngày sinh</p>
                  <p class="main">01/01/1950</p>
               </div>
               <div class="info-box-item d-flex justify-content-between align-items-center">
                  <p>Giới tính</p>
                  <p class="main">Nam</p>
               </div>
            </div>
            <div class="info-desc">
               <div class="info-desc-item">
                  <div class="title-item">
                     Số điện thoại
                     <div class="note success">
                        <i class="fa-solid fa-circle-check"></i>
                        Đã xác thực
                     </div>
                  </div>
                  <div class="name">
                     <span v-if="user.phone">{{ user.phone }}</span
                     ><span v-else>Thêm số điện thoại</span>
                     <div
                        class="wrap-edit-btn add-phone-number-btn"
                        data-bs-toggle="modal"
                        data-bs-target="#updatePhoneNumberModal"
                     >
                        <i class="fa-solid fa-pen"></i>
                     </div>
                  </div>
               </div>
               <div class="info-desc-item">
                  <div class="title-item">
                     Email
                     <div class="note success">
                        <i class="fa-solid fa-circle-check"></i>
                        Đã xác thực
                     </div>
                  </div>
                  <div class="name">
                     {{ user.email }}
                     <div
                        class="wrap-edit-btn update-email-btn"
                        data-bs-toggle="modal"
                        data-bs-target="#updateEmailModal"
                     >
                        <i class="fa-solid fa-pen"></i>
                     </div>
                  </div>
               </div>
               <div class="info-desc-item">
                  <div class="title-item">Facebook</div>
                  <div class="name">
                     Thêm liên kết
                     <div class="wrap-edit-btn">
                        <i class="fa-solid fa-link"></i>
                     </div>
                  </div>
               </div>
               <div class="info-desc-item">
                  <div class="title-item">Google</div>
                  <div class="name">
                     Minh Phúc Nguyễn
                     <div class="wrap-edit-btn">
                        <i class="fa-solid fa-link"></i>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
   <div class="content-item driver-license">
      <div class="content-title d-flex align-items-center justify-content-between">
         <div class="title-edit d-flex align-items-center">
            <h5 class="fs-3 mb-0">Giấy phép lái xe</h5>
            <div class="note success">
               <i class="fa-solid fa-circle-check"></i>
               Đã xác thực
            </div>
         </div>
         <div class="btn d-flex align-items-center">
            <span>Chỉnh sửa</span>
            <i class="fa-solid fa-pen"></i>
         </div>
      </div>
      <div class="content w-100 d-flex justify-content-between">
         <div class="info-license">
            <div class="lincense-title">Thông tin chung</div>
            <div class="custom-input">
               <div class="wrap-info fw-bold mb-1">Số GPLX</div>
               <div class="wrap-input w-100">
                  <input
                     type="text"
                     name="driver-license-number"
                     placeholder="Nhập số GPLX đã cấp"
                     disabled
                  />
               </div>
            </div>
            <div class="custom-input">
               <div class="wrap-info fw-bold mb-1">Họ và tên</div>
               <div class="wrap-input w-100">
                  <input
                     type="text"
                     name="driver-license-fullname"
                     placeholder="Nhập đầy đủ họ tên"
                     disabled
                  />
               </div>
            </div>
            <div class="custom-input">
               <div class="wrap-info fw-bold mb-1">Ngày sinh</div>
               <div class="wrap-input w-100">
                  <input type="text" name="driver-license-birth" value="01/01/1970" disabled />
               </div>
            </div>
         </div>
         <div class="info-license">
            <div class="lincense-title">Hình ảnh</div>
            <div class="license-upload w-100 h-100" @click="chooseLicenseUpload">
               <img v-if="licenseImageUrl" :src="licenseImageUrl" alt="" class="w-100 h-100" />
               <div v-else class="text-center">
                  <i class="fa-solid fa-cloud-arrow-up fs-2"></i>
                  <p>Chọn hình ảnh giấy phép</p>
                  <input
                     type="file"
                     class="d-none"
                     name="license-upload-input"
                     @change="handleLicenseImage"
                  />
               </div>
            </div>
         </div>
      </div>
   </div>
   <div class="content-item">
      <h5 class="fs-3">Giới thiệu bạn mới</h5>
      <p class="mb-0 d-flex align-items-center">
         Tìm hiểu chi tiết chương trình
         <i
            class="fa-solid fa-question border border-1 d-flex align-items-center justify-content-center"
            style="
               font-size: 10px;
               border-radius: 50%;
               margin-left: 5px;
               width: 20px;
               height: 20px;
               cursor: pointer;
            "
         ></i>
      </p>
   </div>
</template>

<script>
import updatePhoneNumberModal from "@/components/Modal/updatePhoneNumberModal/index.vue";
import updateEmailModal from "@/components/Modal/updateEmailModal/index.vue";
import updateInfoModal from "@/components/Modal/updateInfoModal/index.vue";
import avatarUpload from "@/components/Modal/avatarUpload/index.vue";
import { computed, ref } from "vue";
import { useStore } from "vuex";

export default {
   name: "AccountContent",
   components: {
      updatePhoneNumberModal,
      updateEmailModal,
      updateInfoModal,
      avatarUpload,
   },
   setup() {
      const store = useStore();
      const user = computed(() => store.getters["auth/getUser"]);
      const licenseImageUrl = ref(null);

      const dateJoin = computed(() => {
         const date = new Date(user.value.created_at);
         const day = date.getDate().toString().padStart(2, "0");
         const month = (date.getMonth() + 1).toString().padStart(2, "0");
         const year = date.getFullYear();
         return `${day}/${month}/${year}`;
      });

      const chooseLicenseUpload = () => {
         const input = document.querySelector("input[name='license-upload-input']");
         input.click();
      };

      const handleLicenseImage = (e) => {
         const selectedFile = e.target.files[0];
         if (selectedFile) {
            licenseImageUrl.value = URL.createObjectURL(selectedFile);
         }
      };

      return {
         dateJoin,
         user,
         licenseImageUrl,
         chooseLicenseUpload,
         handleLicenseImage,
      };
   },
};
</script>

<style scoped>
@import url("./AccountContent.scss");
</style>
