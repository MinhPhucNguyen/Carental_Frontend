<template>
   <div
      class="modal fade"
      :id="idModal + 'Modal'"
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
               <a
                  id="logout-btn"
                  class="btn btn-danger fw-bold w-100 p-3 border-0 fs-5"
                  style="background: #1cc88a"
                  @click="$emit(idModal)"
               >
                  <slot name="buttonName"></slot>
               </a>
            </div>
         </div>
      </div>
   </div>
</template>

<script>
export default {
   name: "myModal",
   props: {
      idModal: {
         type: String,
         default: "logout",
      },
   },
};
</script>

<style></style>
