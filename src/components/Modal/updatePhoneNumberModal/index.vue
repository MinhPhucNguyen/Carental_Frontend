<template>
   <my-modal @clickTo="updatePhoneNumber" idModal="updatePhoneNumberModal">
      <template v-slot:title>Cập nhật số điện thoại</template>
      <div class="w-100 d-flex justify-content-center mt-3 mb-4">
         <div
            class="spinner-grow text-success"
            role="status"
            style="width: 30px; height: 30px"
            v-if="props.isLoading"
         >
            <span class="visually-hidden">Loading...</span>
         </div>
      </div>
      <div class="custom-input mt-4">
         <div class="wrap-input w-100">
            <input
               type="text"
               name="ip_displayname"
               placeholder="Số điện thoại"
               v-model="model.phone"
            />
         </div>
         <small class="text-danger" v-if="props.errors">{{ props.errors }}</small>
      </div>
      <template v-slot:buttonName> Cập nhật</template>
   </my-modal>
</template>

<script setup>
import myModal from "@/components/Modal/Modal.vue";
import { ref } from "vue";
const props = defineProps(["user", "errors", "isLoading"]);

const model = ref({
   phone: props.user.phone,
});

const emits = defineEmits(["update-phone-number"]);
const updatePhoneNumber = () => {
   emits("update-phone-number", model.value);
};
</script>

<style></style>
