<template>
   <div id="banner-section" class="hidden">
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
                           class="form-control datetime-picker flatpickr_start border-0 text-black"
                           placeholder="Select Start Date"
                           v-model="startDate"
                        />
                        <div @click="openFlatPickr('start-date')">
                           <i class="fa-solid fa-chevron-down"></i>
                        </div>
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
                           class="form-control datetime-picker flatpickr_end border-0 text-black"
                           placeholder="Select End Date"
                           v-model="endDate"
                        />
                        <div @click="openFlatPickr('end-date')">
                           <i class="fa-solid fa-chevron-down"></i>
                        </div>
                     </div>
                  </div>
               </div>
               <router-link :to="{ name: 'findCar' }" class="find-car-btn">Tìm xe</router-link>
            </div>
         </div>
      </div>
   </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import flatpickr from "flatpickr";
import "flatpickr/dist/themes/material_green.css";

const selectedOption = ref("self-drive");
const address = ref("Hà Nội");

const startDate = ref("");
const endDate = ref("");

onMounted(() => {
   //onMounted() được gọi sau khi component được render
   flatpickr(".flatpickr_start", {
      enableTime: true,
      dateFormat: "d/m/Y    H:i ",
      allowInput: true,
      defaultDate: new Date(),
      defaultHour: new Date().getHours(),
   });

   flatpickr(".flatpickr_end", {
      enableTime: true,
      dateFormat: "d/m/Y    H:i ",
      allowInput: true,
      defaultDate: new Date(),
      defaultHour: new Date().getHours(),
   });
});

const openFlatPickr = (open) => {
   const flatpickrInput = document.querySelectorAll(".datetime-picker");
   flatpickrInput.forEach((input, index) => {
      if (open === "start-date" && index === 0) {
         input._flatpickr.open();
      } else if (open === "end-date" && index === 1) {
         input._flatpickr.open();
      }
   });
};

const changeSelectedOption = (option) => {
   selectedOption.value = option;
};
</script>

<style scoped>
@import "./Banner.scss";
</style>
