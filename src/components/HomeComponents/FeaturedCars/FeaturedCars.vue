<template>
  <div id="featured-cars-section">
    <div class="section-container">
      <p class="section-title">Xe dành cho bạn</p>
      <div class="car-list">
        <car-item />
        <car-item />
        <car-item />
        <car-item />
        <car-item />
        <car-item />
        <car-item />
        <car-item />
      </div>
    </div>
  </div>
</template>

<script>
import CarItem from "../CarItemCard/CarItem.vue";

export default {
  name: "FeaturedCarsSection",
  components: {
    CarItem,
  },
};
</script>

<style scoped>
@import "../../../assets/styles/MainStyles/HomeStyles.scss";
@import "./FeaturedCars.scss";
</style>
