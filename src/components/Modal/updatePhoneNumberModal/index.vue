<template>
   <my-modal @updatePhoneNumber="updatePhoneNumber()" idModal="updatePhoneNumber">
      <template v-slot:title>Cập nhật số điện thoại</template>
      <div class="custom-input mt-4">
         <div class="wrap-input w-100">
            <input type="text" name="ip_displayname" placeholder="Số điện thoại" />
         </div>
      </div>
      <template v-slot:buttonName>Cập nhật</template>
   </my-modal>
</template>

<script>
import myModal from "@/components/Modal/Modal.vue";
export default {
   name: "updatePhoneNumberModal",
   components: {
      myModal,
   },
};
</script>

<style></style>
