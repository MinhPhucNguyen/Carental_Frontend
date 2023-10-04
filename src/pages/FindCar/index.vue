<template>
   <div class="finding-wrapper">
      <div class="finding-section">
         <div class="m-container">
            <div class="finding-container">
               <router-link :to="{ name: 'home' }" class="back-btn">
                  <i class="fa-solid fa-chevron-left"></i>
               </router-link>
               <div class="finding-info">
                  <div class="address-form">
                     <i class="fa-solid fa-location-dot"></i>
                     <span>Hồ Chí Minh</span>
                  </div>
                  <div class="time-form">
                     <i class="fa-regular fa-calendar"></i>
                     <span> 21:00, 03/10/2023 - 20:00, 04/10/2023</span>
                  </div>
               </div>
            </div>
         </div>
      </div>
      <div class="filter-section">
         <div class="m-container">
            <div class="filter-container">
               <div class="filter-list">
                  <div class="reset-item"><i class="fa-solid fa-repeat"></i></div>
                  <div class="swiper-list-filter">
                     <div class="swiper-slide">
                        <svg
                           width="24"
                           height="24"
                           viewBox="0 0 24 24"
                           fill="none"
                           xmlns="http://www.w3.org/2000/svg"
                        >
                           <path
                              d="M19.15 15.7199H19.6C20.51 15.7199 21.24 14.8599 21.24 13.8399V12.4499C21.24 11.7199 20.86 11.0399 20.27 10.7399L18.79 9.96995L17.47 7.59994C17.09 6.90994 16.42 6.49994 15.71 6.50994H10.12C9.47 6.50994 8.86 6.84995 8.47 7.42995L6.77 9.93994L3.96 10.7999C3.24 11.0199 2.75 11.7599 2.75 12.5999V13.8299C2.75 14.8499 3.48 15.7099 4.39 15.7099H4.63"
                              stroke="black"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                           ></path>
                           <path
                              d="M8.87 15.7197H14.77"
                              stroke="black"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                           ></path>
                           <path
                              d="M6.69 17.4598C7.83322 17.4598 8.76 16.5331 8.76 15.3898C8.76 14.2466 7.83322 13.3198 6.69 13.3198C5.54677 13.3198 4.62 14.2466 4.62 15.3898C4.62 16.5331 5.54677 17.4598 6.69 17.4598Z"
                              stroke="black"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                           ></path>
                           <path
                              d="M17.08 17.4598C18.2232 17.4598 19.15 16.5331 19.15 15.3898C19.15 14.2466 18.2232 13.3198 17.08 13.3198C15.9368 13.3198 15.01 14.2466 15.01 15.3898C15.01 16.5331 15.9368 17.4598 17.08 17.4598Z"
                              stroke="black"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                           ></path>
                        </svg>
                        <span>Loại xe</span>
                     </div>
                     <div class="swiper-slide">
                        <svg
                           width="24"
                           height="24"
                           viewBox="0 0 24 24"
                           fill="none"
                           xmlns="http://www.w3.org/2000/svg"
                        >
                           <path
                              d="M21.25 11.9998C21.25 14.3198 20.39 16.4598 18.97 18.0698C17.55 19.6998 15.57 20.8298 13.33 21.1398C12.9 21.2098 12.46 21.2398 12 21.2398C11.54 21.2398 11.11 21.2098 10.67 21.1398C8.43 20.8298 6.45 19.6998 5.03 18.0698C3.61 16.4598 2.75 14.3198 2.75 11.9998C2.75 9.67977 3.61 7.53977 5.03 5.92977C6.45 4.29977 8.43 3.16977 10.67 2.85977C11.1 2.78977 11.54 2.75977 12 2.75977C12.46 2.75977 12.89 2.78977 13.33 2.85977C15.57 3.16977 17.55 4.29977 18.97 5.92977C20.39 7.53977 21.25 9.67977 21.25 11.9998Z"
                              stroke="black"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                           ></path>
                           <path
                              d="M11.67 21.1496C11.03 20.4796 8 17.1696 8 11.9996C8 6.82961 11.03 3.51961 11.67 2.84961"
                              stroke="black"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                           ></path>
                           <path
                              d="M12.33 21.1496C12.97 20.4796 16 17.1696 16 11.9996C16 6.82961 12.97 3.51961 12.33 2.84961"
                              stroke="black"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                           ></path>
                           <path
                              d="M2.75 12H21.25"
                              stroke="black"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                           ></path></svg
                        ><span>Hãng xe</span>
                     </div>
                     <div class="swiper-slide">
                        <svg
                           width="24"
                           height="24"
                           viewBox="0 0 24 24"
                           fill="none"
                           xmlns="http://www.w3.org/2000/svg"
                        >
                           <path
                              d="M6.50511 8.86499H4.80511C3.66511 8.86499 2.74512 9.78499 2.74512 10.925V18.115C2.74512 19.255 3.66511 20.175 4.80511 20.175H19.1951C20.3351 20.175 21.2551 19.255 21.2551 18.115V10.925"
                              stroke="black"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                           ></path>
                           <path
                              d="M16.1154 8.86499H10.2754"
                              stroke="black"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                           ></path>
                           <path
                              d="M16.1152 16.0549H19.1952C20.3352 16.0549 21.2552 16.9749 21.2552 18.1149C21.2552 19.2549 20.3352 20.1749 19.1952 20.1749H16.1152"
                              stroke="black"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                           ></path>
                           <path
                              d="M16.1152 5.7749H19.1952C20.3352 5.7749 21.2552 6.6949 21.2552 7.8349"
                              stroke="black"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                           ></path>
                           <path
                              d="M21.2549 18.115V7.83496"
                              stroke="black"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                           ></path>
                           <path
                              d="M16.1152 5.7749V16.0549"
                              stroke="black"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                           ></path>
                           <path
                              d="M2.75488 14.0049H6.86488C7.43488 14.0049 7.89488 14.3949 7.89488 14.8849C7.89488 15.3749 8.35488 15.7649 8.92488 15.7649H9.95488C10.5249 15.7649 10.9849 16.1549 10.9849 16.6449V17.5249V20.1649"
                              stroke="black"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                           ></path>
                           <path
                              d="M8.40495 3.82495C6.98495 3.82495 5.83496 4.97495 5.83496 6.39495C5.83496 8.15495 8.13495 10.735 8.23495 10.845C8.32495 10.945 8.48497 10.945 8.57497 10.845C8.67497 10.735 10.975 8.15495 10.975 6.39495C10.975 4.97495 9.82495 3.82495 8.40495 3.82495Z"
                              stroke="black"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                           ></path>
                           <path
                              d="M8.40562 7.37497C8.89716 7.37497 9.29562 6.9765 9.29562 6.48497C9.29562 5.99344 8.89716 5.59497 8.40562 5.59497C7.91409 5.59497 7.51562 5.99344 7.51562 6.48497C7.51562 6.9765 7.91409 7.37497 8.40562 7.37497Z"
                              fill="black"
                           ></path></svg
                        ><span>Giao nhận xe tận nơi</span>
                     </div>
                     <div class="swiper-slide">
                        <svg
                           width="24"
                           height="24"
                           viewBox="0 0 24 24"
                           fill="none"
                           xmlns="http://www.w3.org/2000/svg"
                        >
                           <circle cx="18" cy="6" r="1.5" stroke="black"></circle>
                           <circle cx="18" cy="18" r="1.5" stroke="black"></circle>
                           <circle cx="12" cy="6" r="1.5" stroke="black"></circle>
                           <circle cx="12" cy="18" r="1.5" stroke="black"></circle>
                           <circle cx="6" cy="6" r="1.5" stroke="black"></circle>
                           <path
                              d="M7.57715 20V16H5.99902C5.69694 16 5.43913 16.054 5.22559 16.1621C5.01074 16.2689 4.84733 16.4206 4.73535 16.6172C4.62207 16.8125 4.56543 17.0423 4.56543 17.3066C4.56543 17.5723 4.62272 17.8008 4.7373 17.9922C4.85189 18.1823 5.0179 18.3281 5.23535 18.4297C5.4515 18.5312 5.71322 18.582 6.02051 18.582H7.07715V17.9023H6.15723C5.99577 17.9023 5.86165 17.8802 5.75488 17.8359C5.64811 17.7917 5.56868 17.7253 5.5166 17.6367C5.46322 17.5482 5.43652 17.4382 5.43652 17.3066C5.43652 17.1738 5.46322 17.0618 5.5166 16.9707C5.56868 16.8796 5.64876 16.8105 5.75684 16.7637C5.86361 16.7155 5.99837 16.6914 6.16113 16.6914H6.73145V20H7.57715ZM5.41699 18.1797L4.42285 20H5.35645L6.3291 18.1797H5.41699Z"
                              fill="black"
                           ></path>
                           <path
                              d="M18 8V12M18 16V12M12 8V16M6 8V11.5C6 11.7761 6.22386 12 6.5 12H18"
                              stroke="black"
                              stroke-linecap="round"
                           ></path></svg
                        ><span>Truyền động</span>
                     </div>
                     <div class="swiper-slide">
                        <svg
                           width="32"
                           height="32"
                           viewBox="0 0 32 32"
                           fill="none"
                           xmlns="http://www.w3.org/2000/svg"
                        >
                           <path
                              d="M10.914 23.3289C10.9148 23.3284 10.9156 23.3279 10.9163 23.3274C10.9155 23.3279 10.9148 23.3284 10.914 23.3289ZM10.914 23.3289C10.914 23.3289 10.914 23.3289 10.914 23.3289L11.3128 23.9114M10.914 23.3289L11.3128 23.9114M11.3128 23.9114L10.9807 23.2882L20.6697 23.9458C20.6682 23.9484 20.6656 23.9496 20.6631 23.9479C20.655 23.9424 20.6343 23.9284 20.6014 23.9074C20.6014 23.9073 20.6014 23.9073 20.6013 23.9073C20.5141 23.8516 20.3413 23.7468 20.0921 23.6208C20.0919 23.6207 20.0918 23.6206 20.0917 23.6206C19.3397 23.2404 17.8926 22.6674 16.0003 22.6674C14.1715 22.6674 12.7584 23.2026 11.9869 23.5817L11.9929 23.5929M11.3128 23.9114L11.331 23.9456C11.3324 23.9483 11.3352 23.9495 11.3377 23.9478C11.3444 23.9432 11.3592 23.9332 11.3821 23.9184L11.9929 23.5929L11.9929 23.5929M11.9929 23.5929C11.9909 23.5892 11.9889 23.5855 11.9868 23.5818C11.6767 23.7342 11.4702 23.8614 11.3821 23.9184L11.9929 23.5929ZM10.6691 24.2983L10.6691 24.2983C10.7406 24.4324 10.8728 24.5792 11.0793 24.6538C11.3072 24.7361 11.5609 24.7039 11.7614 24.5667L11.7614 24.5667C11.7978 24.5418 13.4597 23.4174 16.0003 23.4174C18.5426 23.4174 20.205 24.5432 20.2393 24.5667L20.2393 24.5667C20.4389 24.7034 20.6938 24.7372 20.9245 24.6528C21.1293 24.5779 21.2557 24.4338 21.3233 24.3136L22.4886 22.2427L24.3242 23.0447L21.6934 28.584H9.99882L7.65051 23.0635L9.57427 22.2435L10.6691 24.2983ZM24.4348 22.8117L24.4345 22.8124L24.4348 22.8117Z"
                              stroke="black"
                              stroke-width="1.5"
                           ></path>
                           <path
                              d="M12.75 4.66675C12.75 3.97639 13.3096 3.41675 14 3.41675H18C18.6904 3.41675 19.25 3.97639 19.25 4.66675V7.00008C19.25 7.13815 19.1381 7.25008 19 7.25008H13C12.8619 7.25008 12.75 7.13815 12.75 7.00008V4.66675Z"
                              stroke="black"
                              stroke-width="1.5"
                           ></path>
                           <path
                              d="M9.33398 22.6668L9.90564 11.2336C9.95887 10.1692 10.8374 9.3335 11.9031 9.3335H20.0982C21.1639 9.3335 22.0424 10.1692 22.0957 11.2336L22.6673 22.6668"
                              stroke="black"
                              stroke-width="1.5"
                           ></path>
                           <path
                              d="M14.667 7.35815V9.8901"
                              stroke="black"
                              stroke-width="1.5"
                           ></path>
                           <path
                              d="M17.334 7.35815V9.8901"
                              stroke="black"
                              stroke-width="1.5"
                           ></path></svg
                        ><span>Số chỗ</span>
                     </div>
                     <div class="swiper-slide">
                        <svg
                           xmlns="http://www.w3.org/2000/svg"
                           width="24"
                           height="24"
                           viewBox="0 0 24 24"
                           fill="none"
                        >
                           <path
                              d="M19.15 19.7199H19.6C20.51 19.7199 21.24 18.8599 21.24 17.8399V16.4499C21.24 15.7199 20.86 15.0399 20.27 14.7399L18.79 13.9699L17.47 11.5999C17.09 10.9099 16.42 10.4999 15.71 10.5099H10.12C9.47 10.5099 8.86 10.8499 8.47 11.4299L6.77 13.9399L3.96 14.7999C3.24 15.0199 2.75 15.7599 2.75 16.5999V17.8299C2.75 18.8499 3.48 19.7099 4.39 19.7099H4.63"
                              stroke="black"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                           ></path>
                           <path
                              d="M8.87012 19.72H14.7701"
                              stroke="black"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                           ></path>
                           <path
                              d="M6.69012 21.4598C7.83335 21.4598 8.76012 20.5331 8.76012 19.3898C8.76012 18.2466 7.83335 17.3198 6.69012 17.3198C5.54689 17.3198 4.62012 18.2466 4.62012 19.3898C4.62012 20.5331 5.54689 21.4598 6.69012 21.4598Z"
                              stroke="black"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                           ></path>
                           <path
                              d="M17.0798 21.4598C18.223 21.4598 19.1498 20.5331 19.1498 19.3898C19.1498 18.2466 18.223 17.3198 17.0798 17.3198C15.9365 17.3198 15.0098 18.2466 15.0098 19.3898C15.0098 20.5331 15.9365 21.4598 17.0798 21.4598Z"
                              stroke="black"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                           ></path>
                           <path
                              d="M8 7.5H5.5V2.5H8C9.38068 2.5 10.5 3.61932 10.5 5C10.5 6.38068 9.38068 7.5 8 7.5Z"
                              stroke="black"
                           ></path>
                           <path d="M5.5 3.5H3" stroke="black" stroke-linecap="round"></path>
                           <path d="M5.5 6.5H3" stroke="black" stroke-linecap="round"></path>
                           <path
                              d="M20 10V5H11"
                              stroke="black"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                           ></path>
                           <path
                              d="M12 13L11 15H13L12 17"
                              stroke="black"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                           ></path></svg
                        ><span>Xe điện</span>
                     </div>
                  </div>
               </div>
               <a class="btn text-black"
                  ><svg
                     width="16"
                     height="16"
                     viewBox="0 0 16 16"
                     fill="none"
                     xmlns="http://www.w3.org/2000/svg"
                  >
                     <path
                        d="M12.7932 3.23242H14.1665"
                        stroke="black"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                     ></path>
                     <path
                        d="M1.83325 3.23242H10.0532"
                        stroke="black"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                     ></path>
                     <path
                        d="M11.4266 4.59305C12.185 4.59305 12.7999 3.98415 12.7999 3.23305C12.7999 2.48194 12.185 1.87305 11.4266 1.87305C10.6681 1.87305 10.0532 2.48194 10.0532 3.23305C10.0532 3.98415 10.6681 4.59305 11.4266 4.59305Z"
                        stroke="black"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                     ></path>
                     <path
                        d="M12.7932 12.7656H14.1665"
                        stroke="black"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                     ></path>
                     <path
                        d="M1.83325 12.7656H10.0532"
                        stroke="black"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                     ></path>
                     <path
                        d="M11.4266 14.1263C12.185 14.1263 12.7999 13.5174 12.7999 12.7663C12.7999 12.0151 12.185 11.4062 11.4266 11.4062C10.6681 11.4062 10.0532 12.0151 10.0532 12.7663C10.0532 13.5174 10.6681 14.1263 11.4266 14.1263Z"
                        stroke="black"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                     ></path>
                     <path
                        d="M5.94653 8H14.1665"
                        stroke="black"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                     ></path>
                     <path
                        d="M1.83325 8H3.20658"
                        stroke="black"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                     ></path>
                     <path
                        d="M4.57328 9.36063C5.33175 9.36063 5.94664 8.75173 5.94664 8.00063C5.94664 7.24952 5.33175 6.64062 4.57328 6.64062C3.81481 6.64062 3.19995 7.24952 3.19995 8.00063C3.19995 8.75173 3.81481 9.36063 4.57328 9.36063Z"
                        stroke="black"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                     ></path>
                  </svg>
                  Bộ lọc
               </a>
            </div>
         </div>
      </div>
   </div>
   <div>
      <div class="list-car-section">
         <div class="m-container">
            <div class="list-car">ádsad</div>
         </div>
      </div>
   </div>
</template>

<script setup></script>

<style lang="scss" scoped>
@import url("./FindCar.scss");
</style>
