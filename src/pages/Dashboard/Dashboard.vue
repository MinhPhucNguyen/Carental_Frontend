<template>
   <h1>THIS iS Dashboard</h1>
   {{ user }}
</template>

<script>
import { useStore } from 'vuex';
import { computed } from 'vue';

export default {
   name: "DashboardPage",
   setup() { 
      const store = useStore();
      const user = computed(() => store.getters.user);
      return { user };
   },
};
</script>

<style></style>
