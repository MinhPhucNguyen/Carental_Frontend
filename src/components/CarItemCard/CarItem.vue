<template>
  <a href="" class="car-item">
    <div class="card">
      <img src="" class="card-img-top" alt="car_image" />
      <div class="card-body">
        <div class="d-flex align-items-center">
          <p class="card-text_transmission">Số tự động</p>
          <p class="card-text_delivery">Giao xe tận nơi</p>
        </div>
        <h5 class="card-title text-uppercase">
          TOYOTA <i class="fa-solid fa-shield"></i>
        </h5>
        <p class="info">
          <i class="fa-solid fa-suitcase-rolling"></i>
          <span>20 trip</span>
        </p>
        <div class="car-item-divider"></div>
        <div
          class="desc-address-price d-flex justify-content-between align-items-center mt-3"
        >
          <div class="desc-address d-flex">
            <div class="d-flex align-items-center justify-content-center">
              <i class="fa-solid fa-location-dot"></i>
            </div>
            <span>Hanoi</span>
          </div>
          <div class="desc-price">160.00 VNĐ</div>
        </div>
      </div>
    </div>
  </a>
</template>

<script>
export default {
    name: "CarItem",
};
</script>

<style scoped>
@import url("./CarItem.scss");
</style>
