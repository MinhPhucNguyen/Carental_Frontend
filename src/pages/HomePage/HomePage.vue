<template>
  <div>
    <BannerHome />
    <PromotionSection />
  </div>
</template>

<script>
import BannerHome from "../../components/Banner/Banner.vue";
import PromotionSection from "../../components/Promotion/Promotion.vue";

export default {
  name: "HomePage",
  components: {
    BannerHome,
    PromotionSection,
  },
};
</script>

<style scoped>

</style>
