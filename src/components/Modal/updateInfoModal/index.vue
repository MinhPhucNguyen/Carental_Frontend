<template>
   <my-modal @editAccount="updateInfo()" idModal="editAccount">
      <template v-slot:title>Cập nhật thông tin</template>
      <div class="custom-input mb-4">
         <div class="wrap-info fw-bold mb-1">Tên tài khoản</div>
         <div class="wrap-input w-100">
            <input type="text" name="ip_displayname" value="Nguyễn Minh Phúc" />
         </div>
      </div>
      <div class="custom-input mb-4">
         <div class="wrap-info fw-bold mb-1">Ngày sinh</div>
         <div class="wrap-input w-100">
            <input type="text" name="ip_dob" value="16/09/2002" />
         </div>
      </div>
      <div class="custom-input mb-4">
         <div class="wrap-info fw-bold mb-1">Giới tính</div>
         <div class="wrap-input w-100">
            <select class="select_gender w-100 border-0" name="select_gender">
               <option value="">Nam</option>
               <option value="">Nữ</option>
            </select>
         </div>
      </div>
      <template v-slot:buttonName>Cập nhật</template>
   </my-modal>
</template>

<script>
import myModal from "@/components/Modal/Modal.vue";

export default {
   name: "updateInfoModal",
   components: {
      myModal,
   },
};
</script>

<style></style>
