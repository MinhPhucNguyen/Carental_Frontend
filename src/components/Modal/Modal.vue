<template>
   <div
      class="modal fade"
      :id="idModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
   >
      <div class="modal-dialog">
         <div class="modal-content">
            <div class="modal-header border-0">
               <button
                  type="button"
                  class="btn-close border border-3 rounded-circle"
                  data-bs-dismiss="modal"
                  aria-label="Close"
               ></button>
            </div>
            <div class="modal-body text-dark">
               <h1 class="modal-title fs-3 text-dark w-100 text-center" id="exampleModalLabel">
                  <slot name="title"></slot>
               </h1>
               <slot></slot>
            </div>
            <div class="modal-footer w-100">
               <button
                  id="logout-btn"
                  class="btn btn-primary fw-bold w-100 p-3 border-0 fs-5 text-light d-flex justify-content-center align-items-center"
                  :style="{ backgroundColor: bgColor }"
                  @click="$emit('clickTo')"
               >
                  <slot name="buttonName"></slot>
               </button>
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
