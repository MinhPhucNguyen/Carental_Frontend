<template>
   <div class="title fs-1 fw-bold">Xe yêu thích của tôi</div>
   <div class="tab-mode d-flex align-items-center">
      <div
         class="tab-mode-item w-50"
         :class="{ active: selectedTab === 'Xe tự lái' }"
         @click="changeTab('Xe tự lái')"
      >
         Xe tự lái
      </div>
      <div
         class="tab-mode-item w-50"
         :class="{ active: selectedTab === 'Xe có tài xế' }"
         @click="changeTab('Xe có tài xế')"
      >
         Xe có tài xế
      </div>
   </div>
   <div class="empty-car w-100">
      <img src="@/assets/images/myfavs-tab/empty-favcar.2c855700.svg" alt="empty_car" />
      <p>Không có xe yêu thích</p>
   </div>
</template>

<script>
import { ref } from "vue";

export default {
   name: "MyFavs",
   setup() {
      const selectedTab = ref("Xe tự lái");

      const changeTab = (tabName) => {
         selectedTab.value = tabName;
      };

      return {
         selectedTab,
         changeTab,
      };
   },
};
</script>

<style scoped>
@import url("./MyFavs.scss");
</style>
