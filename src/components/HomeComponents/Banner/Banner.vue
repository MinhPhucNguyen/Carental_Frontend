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
            <div class="search-form-choose mt-3">
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
                  type="date"
                  class="form-control datetime-picker flatpickr border-0"
                  placeholder="Select Start Date"
                />
                <font-awesome-icon
                  :icon="['fas', 'chevron-down']"
                  @click.self="openFlatPickr('start-date')"
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
                  type="date"
                  class="form-control datetime-picker flatpickr border-0"
                  placeholder="Select End Date"
                />
                <font-awesome-icon
                  :icon="['fas', 'chevron-down']"
                  @click.self="openFlatPickr('end-date')"
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
import { onMounted, ref } from "vue";
import flatpickr from "flatpickr";
import "flatpickr/dist/themes/material_green.css";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

export default {
  name: "BannerSection",
  components: {
    FontAwesomeIcon,
  },
  setup() {
    //setup() là một hàm của Vue 3, nó được gọi trước khi component được render, có 2 tham số đầu vào là props và context
    const selectedOption = ref("self-drive");
    const address = ref("Hà Nội");

    onMounted(() => {
      //onMounted() được gọi sau khi component được render
      flatpickr(".flatpickr", {
        enableTime: true,
        dateFormat: "d/m/Y    H:i",
        allowInput: true,
        defaultDate: new Date(),
      });
    });

    const openFlatPickr = (open) => {
      const flatpickrInput = document.querySelectorAll(".flatpickr");
      flatpickrInput.forEach((input, index) => {
        if (open === "start-date" && index === 0) {
          input._flatpickr.open();
        } else if (open === "end-date" && index === 1) {
          input._flatpickr.open();
        }
      });
    };

    return {
      selectedOption,
      address,
      openFlatPickr,
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
.flatpickr {
  font-weight: bold;
  font-size: 22px;
  cursor: pointer;
}
</style>
