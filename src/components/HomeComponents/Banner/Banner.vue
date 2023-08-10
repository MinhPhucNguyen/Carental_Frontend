<template>
  <div id="banner-section">
    <div class="banner">
      <!-- Banner Title -->
      <div class="banner-title">CARENTAL-CÙNG BẠN TRÊN MỌI HÀNH TRÌNH</div>

      <!-- Search Options -->
      <div class="search-option">
        <div class="option d-flex justify-content-center shadow">
          <div
            class="option-item"
            :class="{ active: selectedOption === 'self-drive' }"
            @click="changeSelectedOption('self-drive')"
          >
            <i class="fa-solid fa-car-side"></i>
            <span>Xe tự lái</span>
          </div>
          <div
            class="option-item"
            :class="{ active: selectedOption === 'have-driver' }"
            @click="changeSelectedOption('have-driver')"
          >
            <i class="fa-solid fa-user"></i>
            <span>Xe có tài xế</span>
          </div>
        </div>

        <!-- Search Form -->
        <div class="search shadow d-flex">
          <!-- Address Input -->
          <div class="search-form-item address">
            <div class="search-form-title fw-bold">
              <i class="fa-solid fa-location-dot"></i>
              <span>Địa chỉ</span>
            </div>
            <div class="search-form-choose">
              <input
                type="text"
                class="address-input"
                placeholder="Nhập địa điểm"
                v-model="address"
              />
            </div>
          </div>

          <!-- Date Selection -->
          <div class="search-form-item_divider"></div>
          <div class="calendar-wrap d-flex">
            <div class="search-form-item address">
              <div class="search-form-title fw-bold">
                <i class="fa-regular fa-calendar"></i>
                <span>Bắt đầu</span>
              </div>
              <div class="search-form-choose">
                <input
                  ref="datepicker"
                  class="form-control datetime-picker"
                  type="text"
                  placeholder="Select Start Date"
                  v-model="selectedDateTime"
                />
              </div>
            </div>
            <div class="search-form-item_divider"></div>
            <div class="search-form-item address">
              <div class="search-form-title fw-bold">
                <i class="fa-regular fa-calendar"></i>
                <span>Kết thúc</span>
              </div>
              <div class="search-form-choose">
                <input
                  ref="datepicker"
                  class="form-control datetime-picker"
                  placeholder="Select End Date"
                  type="text"
                />
              </div>
            </div>
          </div>
          <a href="#" class="find-car-btn">Tìm xe</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
// import FlatPickr from "vue-flatpickr-component";
import "flatpickr/dist/flatpickr.css";

export default {
  name: "BannerSection",
  setup() {
    //setup() là một hàm của Vue 3, nó được gọi trước khi component được render, có 2 tham số đầu vào là props và context
    const selectedOption = ref("self-drive");
    const address = ref("Hà Nội");
    const selectedDateTime = ref(null);

    return {
      selectedOption,
      selectedDateTime,
      address,
    };
  },
  methods: {
    changeSelectedOption(option) {
      this.selectedOption = option;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./Banner.scss";
</style>
