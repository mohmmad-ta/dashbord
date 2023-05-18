<template>
    <main>
        <Navbar />
        <RouterView :isRemove="isRemove" @removeProduct="removeProduct" @addProduct="addProduct" :products="products" />
    </main>
</template>

<script setup>
import { RouterView } from 'vue-router'
import Navbar from "@/components/Navbar.vue";
import {ref} from "vue";

const products = ref([
    {
        name: 'first product',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab doloremque nobis officia sapiente temporibus? Ab, aliquam architecto commodi cumque cupiditate enim esse eveniet in labore nisi nobis quaerat quis tempora.',
        image: 'img/a1.jpg'
    }
])
const isRemove = ref(false)

const addProduct = (product)=>{
    products.value.push(product)
}
const removeProduct = (index)=>{
    products.value.pop(index)
}
</script>