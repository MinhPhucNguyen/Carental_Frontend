<template>
  <div>
    <banner-section />
    <promotion-section />
    <featured-cars-section />
    <featured-places-section />
    <advantages-section />
    <service-section />
    <explorer-section />
    <blog-section />
  </div>
</template>

<script>
import BannerSection from "../../components/HomeComponents/Banner/Banner.vue";
import PromotionSection from "../../components/HomeComponents/Promotion/Promotion.vue";
import FeaturedCarsSection from "../../components/HomeComponents/FeaturedCars/FeaturedCars.vue";
import FeaturedPlacesSection from "../../components/HomeComponents/FeaturedPlaces/FeaturedPlaces.vue";
import AdvantagesSection from "../../components/HomeComponents/Advantages/Advantages.vue";
import ServiceSection from "../../components/HomeComponents/ServiceSection/ServiceSection.vue";
import ExplorerSection from "../../components/HomeComponents/ExplorerSection/ExplorerSection.vue";
import BlogSection from "../../components/HomeComponents/BlogSection/BlogSection.vue";

export default {
  name: "HomePage",
  components: {
    BannerSection,
    PromotionSection,
    FeaturedCarsSection,
    FeaturedPlacesSection,
    AdvantagesSection,
    ServiceSection,
    ExplorerSection,
    BlogSection,
  },
};
</script>

<style scoped></style>
