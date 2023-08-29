<template>
   <my-modal @updateEmail="updateEmail()" idModal="updateEmail">
      <template v-slot:title>Cập nhật Email</template>
      <div class="custom-input mt-4">
         <div class="wrap-input w-100">
            <input type="text" name="ip_displayname" placeholder="Email mới" />
         </div>
      </div>
      <template v-slot:buttonName>Cập nhật</template>
   </my-modal>
</template>

<script>
import myModal from "@/components/Modal/Modal.vue";

export default {
   name: "updateEmailModal",
   components: {
      myModal,
   },
};
</script>

<style></style>
