<template>
   <ToastMessage :message="successMessage" />

   <div class="col-md-12">
      <form action="" method="GET" class="m-0 w-50">
         <div class="mb-3 align-items-center d-inline-block mr-4 w-25">
            <div class="d-flex align-items-center">
               <label for="filterByBrand" class="form-label mb-0 fw-bolder">Filter by Brand:</label>
            </div>
            <select name="filterByBrand" class="form-select mt-2 filter-by">
               <option value="all">All</option>
               <option v-for="brand in brandsList" :key="brand.brand_id" :value="brand.brand_id">
                  {{ brand.brand_name }}
               </option>
            </select>
         </div>

         <div class="mb-3 align-items-center d-inline-block ml-2 w-25">
            <div class="d-flex align-items-center">
               <label for="filterByFuel" class="form-label mb-0 fw-bolder">Filter by Fuel:</label>
            </div>
            <select name="filterByFuel" class="form-select mt-2 filter-by-fuel">
               <option value="all">All fuels</option>
               <option value="Petrol">Petrol</option>
               <option value="Diesel">Diesel</option>
            </select>
         </div>
      </form>

      <div class="card">
         <div class="card-header bg-dark">
            <div class="d-inline-block fw-bold text-white fs-4">Cars List</div>
            <router-link :to="{ name: 'cars.create' }" class="btn btn-success fw-bold float-right">
               <i class="fa-solid fa-plus"></i>
               Add New Car
            </router-link>
         </div>
         <div class="card-body mt-0">
            <table class="table table-bordered table-striped text-dark fw-bold">
               <thead>
                  <tr class="text-dark">
                     <th data-sort="car_id">
                        ID
                        <span class="sort-id-icon float-end">
                           <i class="fa-solid fa-arrow-down"></i>
                           <i class="fa-solid fa-arrow-up text-muted"></i>
                        </span>
                     </th>
                     <th class="text-center">Brand</th>
                     <th class="text-center">Name</th>
                     <th class="text-center">Price (per day)</th>
                     <th class="text-center">Seats</th>
                     <th class="text-center">Fuel</th>
                     <th class="text-center">Fuel Consumption</th>
                     <th class="text-center">Transmission</th>
                     <th class="text-center">Location</th>
                     <th class="text-center">Trip</th>
                     <th class="text-center">Status</th>
                     <th class="text-center">Action</th>
                  </tr>
               </thead>
               <tbody id="body-table">
                  <tr v-for="car in carsList" :key="car.carId">
                     <td class="text-center">{{ car.carId }}</td>
                     <td class="text-center">{{ car.brand }}</td>

                     <td class="text-center">
                        <a href="" class="text-success text-decoration-none">{{
                           car.carOriginalName
                        }}</a>
                     </td>
                     <td class="text-center">{{ car.price }}</td>
                     <td class="text-center">{{ car.seat }}</td>
                     <td class="text-center">{{ car.fuel }}</td>
                     <td class="text-center">{{ car.fuelConsumption }}</td>
                     <td class="text-center">
                        {{ car.transmission == 0 ? "Automatic" : "Manual" }}
                     </td>
                     <td class="text-center">{{ car.location }}</td>
                     <td class="text-center">{{ car.numberOfTrip }}</td>
                     <td
                        class="text-center"
                        :class="car.status == 1 ? 'text-success' : 'text-danger'"
                     >
                        {{ car.status == "1" ? "Visibility" : "Unvisibility" }}
                     </td>
                     <td class="text-center">
                        <div class="dropdown">
                           <button
                              class="btn btn-success dropdown-toggle"
                              type="button"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                           >
                              Action
                           </button>
                           <ul class="dropdown-menu">
                              <li>
                                 <router-link
                                    :to="{ name: 'cars.edit', params: { id: car.carId } }"
                                    class="dropdown-item mb-3 fs-6 text-primary bg-white"
                                 >
                                    <i class="fa-solid fa-pen-to-square"></i>
                                    <span class="ml-2">Edit</span>
                                 </router-link>
                              </li>
                              <button
                                 type="button"
                                 class="dropdown-item fs-6 text-danger bg-white"
                                 @click="deleteCar(car.carId)"
                              >
                                 <i class="fa-solid fa-trash"></i>
                                 <span class="ml-2">Delete</span>
                              </button>
                           </ul>
                        </div>
                     </td>

                     <my-modal
                        @clickTo="handleDeleteCar(car.carId)"
                        :idModal="`deleteConfirmModal${car.carId}`"
                        bgColor="danger"
                     >
                        <template v-slot:title>Delete car</template>
                        <h6 class="text-dark text-center fs-5 mt-4">
                           Are you sure, you want to delete this car?
                        </h6>
                        <template v-slot:buttonName>
                           <div
                              class="spinner-border"
                              role="status"
                              style="width: 24px; height: 24px; margin-right: 10px"
                              v-if="isLoading"
                           >
                              <span class="visually-hidden">Loading...</span>
                           </div>
                           Delete
                        </template>
                     </my-modal>
                  </tr>
                  <tr v-if="!carsList.length">
                     <td colspan="12" class="text-center">
                        <stateLoading />
                     </td>
                  </tr>
               </tbody>
            </table>
            <div class="paginate"></div>
         </div>
      </div>
   </div>
</template>

<script setup>
import { onBeforeMount, ref } from "vue";
import { useStore } from "vuex";
import stateLoading from "@/components/Loading/Loading.vue";
import MyModal from "@/components/Modal/Modal.vue";
import ToastMessage from "@/components/Toast/index.vue";

const store = useStore();
const brandsList = ref([]);
const carsList = ref([]);
const isLoading = ref(false);
const successMessage = ref(null);

const getCarsList = async () => {
   return await store.dispatch("cars/fetchCars").then(() => {
      carsList.value = store.getters["cars/getCarsList"];
   });
};

onBeforeMount(() => {
   getCarsList();
   store.dispatch("cars/fetchBrands").then(() => {
      brandsList.value = store.getters["cars/getBrandsList"];
   });
});

const deleteCar = (id) => {
   $(`#deleteConfirmModal${id}`).modal("show");
};

const handleDeleteCar = (id) => {
   isLoading.value = true;
   store
      .dispatch("cars/deleteCar", id)
      .then((response) => {
         isLoading.value = false;
         $(`#deleteConfirmModal${id}`).modal("hide");
         successMessage.value = response.data.message;
         getCarsList().then(() => {
            $(".toast").toast("show");
         });
      })
      .catch((e) => {
         if (e.response) {
            isLoading.value = false;
            alert(e.response.data.errors);
         }
      });
};
</script>

<style></style>
