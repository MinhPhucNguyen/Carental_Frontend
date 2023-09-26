<template>
   <my-modal @clickTo="deleteAccount" idModal="logoutModal">
      <template v-slot:title>Đăng xuất</template>
      <h6 class="text-dark text-center fs-5 mt-4">Bạn có chắc chắn muốn đăng xuất ?</h6>
      <template v-slot:buttonName>Đăng xuất</template>
   </my-modal>

   <div class="delete-account-section">
      <div class="delete-account-container flex-column text-center">
         <h2 class="fw-bold">Yêu cầu xóa tài khoản</h2>
         <div class="delete-account-image">
            <img src="../../assets/images/delete-account/delete-account.svg" alt="" />
         </div>
         <div class="content-inner d-inline-block">
            <p>Khi xóa tài khoản, các thông tin sau (nếu có) sẽ bị xóa trên hệ thống:</p>
            <ul>
               <li>Thông tin cá nhân</li>
               <li>Thông tin lịch sử chuyến và danh sách xe</li>
            </ul>
            <p>
               Tiền ví và điểm thưởng sẽ được thanh toán theo quy định và chính sách hiện hành của
               Mioto.
            </p>

            <p>
               Việc đồng ý xóa tài khoản là bạn đã chấp nhận điều khoản chính sách xóa tài khoản của
               Mioto.
            </p>

            <p>
               Yêu cầu xóa tài khoản sẽ được xử lý trong vòng 15 ngày làm việc. Mioto sẽ liên hệ
               trực tiếp với bạn thông qua Email hoặc Số điện thoại đã cung cấp.
            </p>

            <p>
               Mọi thắc mắc xin liên hệ Fanpage của Mioto hoặc Hotline 1900 9217 (7AM - 10PM) để
               được hỗ trợ.
            </p>
         </div>
         <div class="wrap-btn d-flex flex-column">
            <a @click.prevent="deleteAccount" class="btn btn-danger del-account-btn fs-5 fw-bold"
               >Xóa tài khoản</a
            >
            <router-link :to="{ name: 'home' }" class="cancel-btn text-dark mt-4 fs-5 fw-bold"
               >Hủy</router-link
            >
         </div>
      </div>
   </div>
</template>

<script setup>
import { useStore } from "vuex";

const store = useStore();
const deleteAccount = () => {
   store.dispatch("users.deleteAccount").then((response) => {
      console.log(response);
   });
};
</script>

<style scoped>
@import url("./deleteAccount.scss");
</style>
