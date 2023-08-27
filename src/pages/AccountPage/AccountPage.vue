<template>
   <h1>THIS iS ACCOUT PAGE</h1>
   {{ user }}
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";

export default {
   name: "AccountPage",
   setup() {
      const store = useStore();
      const user = computed(() => store.getters.user);
      return { user };
   },
};
</script>

<style></style>
