<template>
   <div id="featured-cars-section" class="hidden">
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
         <div v-else>
            <state-loading />
         </div>
      </div>
   </div>
</template>

<script>
import axios from "axios";
import { onBeforeMount, ref } from "vue";
import CarItem from "../CarItemCard/CarItem.vue";
import stateLoading from "@/components/Loading/Loading.vue";

export default {
   name: "FeaturedCarsSection",
   components: {
      CarItem,
      stateLoading,
   },
   setup() {
      const randomCars = ref([]);
      const errorMessage = ref(null);

      const getRandomCars = async () => {
         try {
            const response = await axios.get("v2/cars/randomCars");
            if (response.status === 200) {
               randomCars.value = response.data.data.cars;
            }
         } catch (error) {
            errorMessage.value = error;
         }
      };

      onBeforeMount(() => {
         getRandomCars();
      });

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
