<template>
   <ToastMessage :message="successMessage" />

   <div class="col-md-12">
      <div class="card">
         <div class="card-header bg-transparent border-0">
            <div class="d-inline-block fw-bold text-dark fs-4">Create New Car</div>
            <router-link :to="{ name: 'admin.cars' }" class="btn btn-danger fw-bold float-right">
               <i class="fa-solid fa-arrow-left"></i>
               BACK
            </router-link>
         </div>
         <div class="card-body mt-0">
            <form @submit.prevent="createNewCar">
               <ul class="nav nav-tabs" id="myTab" role="tablist">
                  <li class="nav-item" role="presentation">
                     <button
                        class="nav-link text-success fw-bold active"
                        id="home-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#car-tab-pane"
                        type="button"
                        role="tab"
                        aria-controls="car-tab-pane"
                        aria-selected="true"
                     >
                        <i class="fa-solid fa-circle-info mr-1"></i>
                        Car Details
                     </button>
                  </li>
                  <li class="nav-item" role="presentation">
                     <button
                        class="nav-link text-success fw-bold"
                        id="profile-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#feature-tab-pane"
                        type="button"
                        role="tab"
                        aria-controls="feature-tab-pane"
                        aria-selected="false"
                     >
                        <i class="fa-solid fa-list"></i>
                        Features
                     </button>
                  </li>
                  <li class="nav-item" role="presentation">
                     <button
                        class="nav-link text-success fw-bold"
                        id="profile-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#image-tab-pane"
                        type="button"
                        role="tab"
                        aria-controls="image-tab-pane"
                        aria-selected="false"
                     >
                        <i class="fa-solid fa-image mr-1"></i>
                        Car Images
                     </button>
                  </li>
               </ul>
               <div class="tab-content" id="myTabContent">
                  <div
                     class="tab-pane fade show mt-3 active"
                     id="car-tab-pane"
                     role="tabpanel"
                     aria-labelledby="home-tab"
                     tabindex="0"
                  >
                     <h5 class="mb-4">Information of Car</h5>
                     <div class="row">
                        <div class="col-md-4 mb-3">
                           <label for="brand">Brand</label>
                           <select class="form-control" v-model="model.brand_id">
                              <option value="">--Select Brand--</option>
                              <option
                                 v-for="brand in brandsList"
                                 :key="brand.brand_id"
                                 :value="brand.brand_id"
                              >
                                 {{ brand.brand_name }}
                              </option>
                           </select>
                           <small class="text-danger" v-if="errors.brand">{{
                              errors.brand[0]
                           }}</small>
                        </div>
                        <div class="col-md-4 mb-3">
                           <label for="car_name">Car Name</label>
                           <input
                              type="text"
                              name="car_name"
                              class="form-control"
                              v-model="model.car_name"
                           />
                           <small class="text-danger" v-if="errors.car_name">{{
                              errors.car_name[0]
                           }}</small>
                        </div>
                        <div class="col-md-4 mb-3">
                           <label for="year">Year</label>
                           <input
                              type="text"
                              name="year"
                              class="form-control"
                              v-model="model.year"
                           />
                           <small class="text-danger" v-if="errors.year">{{
                              errors.year[0]
                           }}</small>
                        </div>
                        <div class="col-md-4 mb-3">
                           <label for="price">Price</label>
                           <input
                              type="text"
                              name="price"
                              class="form-control"
                              v-model="model.price"
                           />
                           <small class="text-danger" v-if="errors.price">{{
                              errors.price[0]
                           }}</small>
                        </div>
                        <div class="col-md-4 mb-3">
                           <label for="status">Status</label>
                           <div class="d-flex align-items-center">
                              <input
                                 type="checkbox"
                                 name="status"
                                 value="1"
                                 v-model="isStatusChecked"
                              />
                              <label for="status" class="ml-2 mb-0">Visibility</label>
                           </div>
                        </div>
                        <div class="col-md-4 mb-3">
                           <label for="delivery_enable">Delivery</label>
                           <div class="d-flex align-items-center">
                              <input
                                 type="checkbox"
                                 name="delivery_enable"
                                 value="1"
                                 v-model="isDeliveryChecked"
                              />
                              <label for="delivery_enable" class="ml-2 mb-0">Enable</label>
                           </div>
                        </div>

                        <div class="col-md-3 mb-3">
                           <label for="seats">Seats</label>
                           <input
                              type="text"
                              name="seats"
                              class="form-control"
                              v-model="model.seats"
                           />
                           <small class="text-danger" v-if="errors.seats">{{
                              errors.seats[0]
                           }}</small>
                        </div>
                        <div class="col-md-3 mb-3">
                           <label for="fuel">Fuel</label>
                           <select name="fuel" class="form-control" v-model="model.fuel">
                              <option value="">--Select Type Of Fuel--</option>
                              <option value="Petrol">Petrol</option>
                              <option value="Diesel">Diesel</option>
                           </select>
                           <small class="text-danger" v-if="errors.fuel">{{
                              errors.fuel[0]
                           }}</small>
                        </div>
                        <div class="col-md-3 mb-3">
                           <label for="speed">Speed (Km/h)</label>
                           <input
                              type="text"
                              name="speed"
                              class="form-control"
                              v-model="model.speed"
                           />
                           <small class="text-danger" v-if="errors.speed">{{
                              errors.speed[0]
                           }}</small>
                        </div>
                        <div class="col-md-3 mb-3">
                           <label for="fuel_consumption">Fuel Consumption (/100km)</label>
                           <input
                              type="text"
                              name="fuel_consumption"
                              class="form-control"
                              v-model="model.fuel_consumption"
                           />
                           <small class="text-danger" v-if="errors.fuel_consumption">{{
                              errors.fuel_consumption[0]
                           }}</small>
                        </div>
                        <div class="col-md-3 mb-3">
                           <label for="transmission">Transmission</label>
                           <select
                              name="transmission"
                              class="form-control"
                              v-model="model.transmission"
                           >
                              <option value="">--Select Transmission--</option>
                              <option value="0">Automatic</option>
                              <option value="1">Manual</option>
                           </select>
                           <small class="text-danger" v-if="errors.transmission">{{
                              errors.transmission[0]
                           }}</small>
                        </div>
                        <div class="col-md-3 mb-3">
                           <label for="trip">Number of trip</label>
                           <input
                              type="text"
                              name="trip"
                              class="form-control"
                              v-model="model.number_of_trip"
                           />
                           <small class="text-danger" v-if="errors.number_of_trip">{{
                              errors.number_of_trip[0]
                           }}</small>
                        </div>
                        <div class="col-md-3 mb-3">
                           <label for="location">Location</label>
                           <input
                              type="text"
                              name="location"
                              class="form-control"
                              v-model="model.location"
                           />
                           <small class="text-danger" v-if="errors.location">{{
                              errors.location[0]
                           }}</small>
                        </div>
                        <div class="col-md-12 mb-3">
                           <label for="description">Description</label>
                           <ckeditorComponent v-model="model.description"></ckeditorComponent>
                        </div>
                     </div>
                  </div>

                  <div
                     class="tab-pane fade mt-3"
                     id="feature-tab-pane"
                     role="tabpanel"
                     aria-labelledby="image-tab"
                     tabindex="0"
                  >
                     <div class="row">
                        <div class="col-md-6 mb-3">
                           <h5 class="mb-4">Select Features</h5>
                           <div class="features-list">
                              <div
                                 name="features"
                                 class="feature-item"
                                 v-for="feature in featuresList"
                                 :key="feature.id"
                                 @click="selectFeature($event, feature.id)"
                              >
                                 {{ feature.name }}
                              </div>
                              <input type="hidden" class="featuresChose" />
                           </div>
                        </div>
                     </div>
                  </div>

                  <div
                     class="tab-pane fade mt-3"
                     id="image-tab-pane"
                     role="tabpanel"
                     aria-labelledby="image-tab"
                     tabindex="0"
                  >
                     <div class="row">
                        <div class="col-md-6 mb-3">
                           <h5 class="mb-4">Upload Car Images</h5>
                           <input
                              ref="filesInput"
                              type="file"
                              multiple
                              name="image[]"
                              class="form-control file-input"
                              @change="uploadCarImage"
                           />
                           <div class="display_image mb-4" v-if="imagesUrl.length > 0">
                              <div
                                 class="car_image_input"
                                 v-for="(src, index) in imagesUrl"
                                 :key="index"
                              >
                                 <img :src="src" alt="" class="image_input" />
                                 <button
                                    class="btn btn-danger remove_btn"
                                    @click.prevent="removeImage(index)"
                                 >
                                    Remove
                                 </button>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <button
                  class="btn btn-success p-3 fw-bold float-end"
                  type="submit"
                  :disabled="isFilledForm"
               >
                  <div
                     class="spinner-border"
                     role="status"
                     style="width: 20px; height: 20px; margin-right: 10px"
                     v-if="isLoading"
                  >
                     <span class="visually-hidden">Loading...</span>
                  </div>
                  Create
               </button>
            </form>
         </div>
      </div>
   </div>
</template>

<script setup>
import ckeditorComponent from "@/components/Editor/index.vue";
import { ref, onBeforeMount, computed, watch } from "vue";
import { useStore } from "vuex";
import ToastMessage from "@/components/Toast/index.vue";
import { useRouter } from "vue-router";

const store = useStore();
const brandsList = ref([]);
const featuresList = ref([]);
const successMessage = ref(null);
const errors = ref({});
const isLoading = ref(false);
const router = useRouter();
const model = ref({
   brand_id: "",
   car_name: "",
   price: "",
   description: "",
   seats: "",
   fuel: "",
   year: "",
   status: 0,
   delivery_enable: 0,
   speed: "",
   fuel_consumption: "",
   transmission: "",
   location: "",
   number_of_trip: "",
   featuresId: [],
   car_images: [],
});

onBeforeMount(() => {
   store.dispatch("cars/fetchBrands").then(() => {
      brandsList.value = store.getters["cars/getBrandsList"];
   });
   store.dispatch("cars/fetchFeatures").then(() => {
      featuresList.value = store.getters["cars/getFeaturesList"];
   });
});

/**
 * TODO: Select feature
 */
const selectFeature = (event, id) => {
   const item = event.target;
   if (item) {
      item.classList.toggle("feature-chose");
      if (item.classList.contains("feature-chose")) {
         model.value.featuresId.push(id);
      } else {
         const indexItemExist = model.value.featuresId.indexOf(id);
         model.value.featuresId.splice(indexItemExist, 1);
      }
   }
};

/**
 * TODO: display image
 */
const filesInput = ref(null);
const imagesUrl = ref([]);

const uploadCarImage = (event) => {
   for (const file of event.target.files) {
      const imageURL = URL.createObjectURL(file);
      imagesUrl.value.push(imageURL);
      model.value.car_images.push(file);
   }
};

/**
 * TODO: Remove car image before create new car
 * @param {*} index
 */
const removeImage = (index) => {
   imagesUrl.value.splice(index, 1);

   const newFileList = new DataTransfer();

   for (let i = 0; i < filesInput.value.files.length; i++) {
      if (i !== index) {
         newFileList.items.add(filesInput.value.files[i]);
      }
   }
   filesInput.value.files = newFileList.files;
};

const isStatusChecked = computed({
   get() {
      return model.value.status === 1;
   },
   set(value) {
      model.value.status = value ? 1 : 0;
   },
});

const isDeliveryChecked = computed({
   get() {
      return model.value.delivery_enable === 1;
   },
   set(value) {
      model.value.delivery_enable = value ? 1 : 0;
   },
});

/**
 * TODO: Create new car
 */
const isFilledForm = ref(true);

watch(model.value, () => {
   isFilledForm.value = false;
});

const createNewCar = async () => {
   const formData = new FormData();
   for (const key in model.value) {
      if (model.value.hasOwnProperty(key)) {
         //Xác định xem đối tượng có chứa thuộc tính được chỉ định hay không
         const value = model.value[key];
         if (Array.isArray(value)) {
            for (const item of value) {
               formData.append(`${key}[]`, item);
            }
         } else {
            formData.append(key, value);
         }
      }
   }

   isLoading.value = true;
   store
      .dispatch("cars/createNewCar", formData)
      .then((response) => {
         successMessage.value = response.data.message;
         $(".toast").toast("show");
         isLoading.value = false;
         setTimeout(() => {
            router.push({ name: "admin.cars" });
         }, 2000);
      })
      .catch((e) => {
         if (e.response.status === 422) {
            errors.value = e.response.data.errors;
            console.log(errors.value);
            isLoading.value = false;
         }
      });
};
</script>

<style></style>
