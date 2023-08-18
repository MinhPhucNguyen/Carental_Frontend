<template>
  <div id="featured-cars-section">
    <div class="section-container">
      <p class="section-title">Xe dành cho bạn</p>
      <div class="car-list" v-if="randomCars.length > 0">
        <car-item
          v-for="carItem in randomCars"
          :key="carItem.carId"
          :carItemProps="carItem"
          :imagePath="getImagePath(carItem.carImages)"
        />
      </div>
      <div v-else-if="errorMessage">{{ errorMessage }}</div>
      <div v-else class="w-100 text-center">
        <div
          class="spinner-grow"
          style="width: 3rem; height: 3rem; color: #1cc88a"
          role="status"
        >
          <span class="visually-hidden">Loading...</span>
        </div>
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
    const errorMessage = ref(null);

    const getRandomCars = async () => {
      try {
        const response = await axios.get(
          "http://127.0.0.1:8000/api/v2/cars/randomCars"
        );
        if (response.status === 200) {
          randomCars.value = response.data.data;
        }
      } catch (error) {
        errorMessage.value = error;
      }
    };
    getRandomCars();

    const getImagePath = (carImages) => {
      if (carImages.length > 0) {
        return carImages[0].imagePath;
      }
      return null;
    };

    return {
      randomCars,
      errorMessage,
      getImagePath,
    };
  },
};
</script>

<style scoped>
@import "../../../assets/styles/MainStyles/HomeStyles.scss";
@import "./FeaturedCars.scss";
</style>
