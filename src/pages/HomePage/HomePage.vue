<template>
  <div>
    <banner-home />
    <promotion-section />
    <featured-cars />
  </div>
</template>

<script>
import BannerHome from "../../components/Banner/Banner.vue";
import PromotionSection from "../../components/Promotion/Promotion.vue";
import FeaturedCars from "../../components/FeaturedCars/FeaturedCars.vue";

export default {
  name: "HomePage",
  components: {
    BannerHome,
    PromotionSection,
    FeaturedCars,
  },
};
</script>

<style scoped></style>
