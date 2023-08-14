<template>
  <a href="" class="car-item" v-if="carItemProps.status === 1">
    <div class="card">
      <img :src="imagePath" class="card-img-top" alt="car_image" />
      <div class="card-body">
        <div class="d-flex align-items-center">
          <p class="card-text_transmission">
            {{ carItemProps.transmission === "0" ? "Số tự động" : "Số sàn" }}
          </p>
          <p
            class="card-text_delivery"
            v-if="carItemProps.delivery_enable === 1"
          >
            Giao xe tận nơi
          </p>
        </div>
        <h5 class="card-title text-uppercase">
          <span>
            {{ carItemProps.carCustomName }}
          </span>
          <font-awesome-icon
            :icon="['fas', 'shield-halved']"
            style="color: #1cc88a"
          />
        </h5>
        <div class="info">
          <div class="desc-address d-flex">
            <div class="d-flex align-items-center justify-content-center">
              <font-awesome-icon icon="fa-solid fa-location-dot" />
            </div>
            <span>{{ carItemProps.location }}</span>
          </div>
        </div>
        <div class="car-item-divider"></div>
        <div
          class="trip-price d-flex justify-content-between align-items-center mt-3"
        >
          <div class="trip">
            <i class="fa-solid fa-suitcase-rolling"></i>
            <span> {{ carItemProps.numberOfTrip }} </span>trip
          </div>
          <div class="desc-price">
            {{
              new Intl.NumberFormat("it-IT", {
                style: "currency",
                currency: "VND",
              }).format(carItemProps.price)
            }}
          </div>
        </div>
      </div>
    </div>
  </a>
</template>

<script>
export default {
  name: "CarItem",
  props: {
    carItemProps: {
      type: Object,
    },
    imagePath: {
      type: String,
    }
  },
  // setup(props) {
  //   console.log(props.carItemProps.carImages);
  // },
};
</script>

<style scoped>
@import "./CarItem.scss";
</style>
