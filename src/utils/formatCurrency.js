import { computed } from "vue";

export const formatCurrency = computed(() => {
   return (price) => {
      return new Intl.NumberFormat("it-IT", {
         style: "currency",
         currency: "VND",
      }).format(price);
   };
});
