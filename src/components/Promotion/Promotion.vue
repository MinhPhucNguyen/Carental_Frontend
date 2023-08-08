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
                  src="{{ asset('../../image/banner/banner_img.jpg') }}"
                  class="d-block w-100"
                  alt="..."
                />
              </div>
              <div class="promotion-item-image d-inline-block">
                <img
                  src="{{ asset('../../image/slider/slider1.jpg') }}"
                  class="d-block w-100"
                  alt="..."
                />
              </div>
              <div class="promotion-item-image d-inline-block">
                <img
                  src="{{ asset('../../image/slider/slider2.jpg') }}"
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
                  src="{{ asset('../../image/banner/banner_img.jpg') }}"
                  class="d-block w-100"
                  alt="..."
                />
              </div>
              <div class="promotion-item-image d-inline-block">
                <img
                  src="{{ asset('../../image/slider/slider2.jpg') }}"
                  class="d-block w-100"
                  alt="..."
                />
              </div>
              <div class="promotion-item-image d-inline-block">
                <img
                  src="{{ asset('../../image/slider/slider1.jpg') }}"
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
                  src="{{ asset('../../image/slider/slider1.jpg') }}"
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

<style scoped>
#promotion-section {
  width: 100%;
  background: white;
  padding: 60px 0;
}
.section-container {
  width: 80%;
  margin: 0 auto;
}

.section-container .section-title {
  text-align: center;
  font-size: 40px;
  font-weight: bold;
  letter-spacing: 2px;
  text-transform: uppercase;
  margin-bottom: 50px;
}

.promotion-item-image {
  width: calc(100% / 3);
  height: 300px;
  margin-right: 20px;
  cursor: pointer;
  height: 300px;
}

.promotion-item-image:last-child {
  margin-right: 0;
}

.promotion-item-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 20px;
}
</style>
