<template>
   <div
      class="modal fade"
      :id="idModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
   >
      <div class="modal-dialog">
         <div class="modal-content rounded-3 border-0">
            <div class="modal-header border-0">
               <button
                  type="button"
                  class="btn-close border border-3 rounded-circle"
                  data-bs-dismiss="modal"
                  aria-label="Close"
               ></button>
            </div>
            <div class="modal-body text-dark">
               <h1
                  class="modal-title fs-3 text-black fw-bold w-100 text-center"
                  id="exampleModalLabel"
               >
                  <slot name="title"></slot>
               </h1>
               <slot></slot>
            </div>
            <div class="modal-footer w-100 border-0">
               <button
                  id="logout-btn"
                  class="btn btn-primary fw-bold w-100 p-3 border-0 fs-5 text-light d-flex justify-content-center align-items-center"
                  :style="{ backgroundColor: bgColor }"
                  @click="$emit('clickTo')"
                  :disabled="!filledForm"
                  v-if="showButton"
               >
                  <slot name="buttonName"></slot>
               </button>
               <slot name="message"></slot>
            </div>
         </div>
      </div>
   </div>
</template>

<script>
import { computed } from "vue";
export default {
   name: "myModal",
   props: {
      idModal: {
         type: String,
         default: "logout",
      },
      bgColor: {
         type: String,
         default: "success",
      },
      filledForm: {
         type: Boolean,
         default: true,
      },
      showButton: {
         type: Boolean,
         default: true,
      },
   },
   setup(props) {
      const bgColor = computed(() => {
         if (props.bgColor == "danger") {
            return "#e74a3b";
         } else {
            return "#1cc88a";
         }
      });

      return {
         bgColor,
      };
   },
};
</script>

<style></style>
