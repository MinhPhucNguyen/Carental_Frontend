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
        {{ randomCars }}
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { ref } from "vue";
import CarItem from "../CarItemCard/CarItem.vue";

export default {
  name: "FeaturedCarsSection",
  components: {
    CarItem,
  },
  setup() {
    const randomCars = ref([]);

    const getRandomCars = async () => {
      try {
        const response = await axios.get(
          "http://127.0.0.1:8000/api/v2/cars/randomCars"
        );

        console.log(response.data);
        randomCars.value = response.data;
      } catch (error) {
        console.log(error);
      }
    };
    getRandomCars();

    return {
      randomCars,
    };
  },
};
</script>

<style scoped>
@import "../../../assets/styles/MainStyles/HomeStyles.scss";
@import "./FeaturedCars.scss";
</style>
