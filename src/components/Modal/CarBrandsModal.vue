<template>
    <myModal @clickTo="selectCarsBrand" idModal="carBrandsModal">
        <template v-slot:title> <span> Hãng xe </span></template>
        <div class="car-brands-list">
            <div class="car-brands-item">
                <input type="radio" value="0" name="brand" checked v-model="checked">
                <label for="">Tất cả</label>
            </div>
            <div class="car-brands-item" v-for="brand in props.brandsList" :key="brand.brand_id">
                <input type="radio" name="brand" :id="brand.brand_id" :value="brand.brand_id" v-model="checked">
                <label :for="brand.brand_id">
                    <img src="" alt="">
                    <p>{{ brand.brand_name }}</p>
                </label>
            </div>
        </div>
        <template v-slot:buttonName>Áp dụng</template>
    </myModal>
</template>

<script setup>
import myModal from "@/components/Modal/Modal.vue";
import { ref, watch } from "vue";

const checked = ref(0);
const emits = defineEmits(['select-car-brands']);
const props = defineProps({
    brandsList: {
        type: Array,
    }
})

watch(checked, (value) => {
    emits('select-car-brands', value);
})


const selectCarsBrand = () => {
    $('#carBrandsModal').modal('hide');
}

</script>

<style lang="scss" scoped>
.car-brands-list {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    grid-gap: 10px;
    margin-top: 20px;

    .car-brands-item {
        width: calc(50% - 5px);
        height: 60px;
        display: flex;
        align-items: center;

        label {
            display: flex;
            margin-left: 20px;
        }

        p,
        label {
            color: black;
            font-weight: 500;
            margin-bottom: 0;
        }

        input[type="radio"] {
            cursor: pointer;
        }
    }
}
</style>
