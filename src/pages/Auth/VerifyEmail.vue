<template>
   <div class="w-100 d-flex justify-content-center mt-4">
      <div
         class="spinner-grow text-success"
         role="status"
         style="width: 60px; height: 60px; margin-right: 30px"
         v-if="isLoading"
      >
         <span class="visually-hidden">Loading...</span>
      </div>
   </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";

const store = useStore();
const router = useRouter();
const isLoading = ref(true);

store
   .dispatch("users/verifyEmail", router.currentRoute.value.query)
   .then(() => {
      isLoading.value = false;
   })
   .then(() => {
      router.push({ name: "accountContent" });
   });
</script>

<style></style>
