<template>
  <div id="promotion-section">
    <div class="section-container">
      <p class="section-title">Chương trình khuyến mãi</p>
      <div id="carouselExample" class="carousel slide">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <div class="d-block d-flex w-100">
              <div class="promotion-item-image d-inline-block">
                <img
                  src=""
                  class="d-block w-100"
                  alt="..."
                />
              </div>
              <div class="promotion-item-image d-inline-block">
                <img
                  src=""
                  class="d-block w-100"
                  alt="..."
                />
              </div>
              <div class="promotion-item-image d-inline-block">
                <img
                  src=""
                  class="d-block w-100"
                  alt="..."
                />
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div class="d-block d-flex w-100">
              <div class="promotion-item-image d-inline-block">
                <img
                  src=""
                  class="d-block w-100"
                  alt="..."
                />
              </div>
              <div class="promotion-item-image d-inline-block">
                <img
                  src=""
                  class="d-block w-100"
                  alt="..."
                />
              </div>
              <div class="promotion-item-image d-inline-block">
                <img
                  src=""
                  class="d-block w-100"
                  alt="..."
                />
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div class="d-block d-flex w-100">
              <div class="promotion-item-image d-inline-block">
                <img
                  src=""
                  class="d-block w-100"
                  alt="..."
                />
              </div>
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden prev-btn">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden next-btn">Next</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PromotionSection",
};
</script>

<style  scoped>
@import url('../../assets/styles/MainStyles/HomeStyles.scss');
@import url("./Promotion.scss");
</style>
