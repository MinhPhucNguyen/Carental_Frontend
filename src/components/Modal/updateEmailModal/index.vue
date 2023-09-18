<template>
   <my-modal @clickTo="handleEmail" idModal="updateEmailModal">
      <template v-slot:title>Cập nhật Email</template>
      <div class="w-100 d-flex justify-content-center mt-3">
         <div
            class="spinner-grow text-success"
            role="status"
            style="width: 26px; height: 26px; margin-right: 10px"
            v-if="props.isLoading"
         >
            <span class="visually-hidden">Loading...</span>
         </div>
      </div>
      <div v-if="props.isUpdateEmailSuccess && props.successMessage">
         <p class="text-center fs-5 mt-3 mb-0">
            {{ props.checkEmail ? props.checkEmail : props.successMessage }}
         </p>
      </div>
      <div v-else class="custom-input mt-4">
         <div class="wrap-input w-100">
            <input
               type="text"
               name="ip_displayname"
               placeholder="Email mới"
               v-model="model.email"
            />
         </div>
         <small class="text-danger" v-if="props.errors">{{ props.errors }}</small>
      </div>
      <template v-slot:buttonName>
         <span v-if="props.isUpdateEmailSuccess"> Xác minh ngay </span>
         <span v-else> Cập nhật </span>
      </template>
      <template v-slot:message>
         <div v-if="props.checkEmail" class="text-center fs-6 mt-2 mb-0 mx-auto">
            Không nhận được email.
            <span class="fs-6 text-success" style="cursor: pointer">Yêu cầu gửi lại</span>
         </div>
      </template>
   </my-modal>
</template>

<script setup>
import myModal from "@/components/Modal/Modal.vue";
import { onMounted, ref } from "vue";

const props = defineProps([
   "user",
   "isLoading",
   "errors",
   "successMessage",
   "isUpdateEmailSuccess",
   "checkEmail",
]);

const model = ref({
   email: "",
});

const emits = defineEmits(["handle-email"]);

const handleEmail = () => {
   if (props.isUpdateEmailSuccess) {
      verificationEmail();
   } else {
      updateEmail();
   }
};
const updateEmail = () => {
   emits("handle-email", model.value);
};

const verificationEmail = () => {
   emits("handle-email", props.isUpdateEmailSuccess);
};

onMounted(() => {
   $("#updateEmailModal").on("hide.bs.modal", () => {
      model.value.email = "";
   });
});
</script>

<style></style>
