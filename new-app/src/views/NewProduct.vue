<template>
  <div class="container mx-auto bg-none py-24">
      <div class="rounded-xl w-full p-6 bg-white shadow-md">
          <div class="w-full py-3 px-14">
              <h2 class="font-bold text-xl">Products</h2>
              <p class="text-md">Architects design houses</p>
          </div>
          <div class="w-full flex gap-4 flex-wrap justify-center">
              <TransitionGroup name="list" mod>
                  <div v-for="(endNewProduct, index) in endNewProducts">
                      <div class="w-72 h-96 overflow-hidden rounded-xl flex flex-wrap">
                          <img class="rounded-xl w-full h-48" :src="endNewProduct.image" :alt="endNewProduct.image">
                          <div class="px-3 w-full h-32">
                              <h2 class="text-gray-500 text-sm"># Products {{index+1}}</h2>
                              <h2 class="font-bold text-xl py-1">{{ endNewProduct.name }}</h2>
                              <p class="text-gray-500 font-semibold text-sm">{{endNewProduct.description.length > 100 ? endNewProduct.description.slice(0,100)+ " ...." :  endNewProduct.description}}</p>
                          </div>
                          <button class="mx-3 mb-2 px-3 duration-200 rounded-2xl hover:text-red-500 hover:border-red-500 border-gray-500 text-gray-500 font-bold border-2">Show</button>
                      </div>
                  </div>
              </TransitionGroup>
              <div @click="isOpen = true" class=" cursor-pointer w-72 h-96 justify-center items-center overflow-hidden rounded-xl flex flex-wrap duration-200 hover:text-red-500 hover:border-red-500 border-gray-300 text-gray-400 font-bold border-2">
                  <div class="w-fit text-center">
                      <i class="fa-solid fa-plus py-1 text-2xl"></i>
                      <h2 class="font-bold text-xl">New Product</h2>
                  </div>
              </div>
          </div>
      </div>
  </div>
    <Transition>
        <AddProduct @open="open" @addNewProduct="addNewProduct" v-if="isOpen" />
    </Transition>
</template>

<script setup>
import { ref, watchEffect} from 'vue'
import AddProduct from "@/components/AddProduct.vue";
const emit = defineEmits(['addProduct'])
const isOpen = ref(false)
const addNewProduct = (newProduct)=>{
    emit('addProduct', newProduct)
    isOpen.value = false;
}
const open = ()=>{
    isOpen.value === false ? isOpen.value = true : isOpen.value = false;

}
const props = defineProps({
    products:{
        type: Array,
        required: true
    }
})
const endNewProducts = ref([])
const endProducts = ()=> {
    endNewProducts.value = []
    for (let i=props.products.length -1; i>props.products.length-4; i--){
        if (i=== -1){break}
        endNewProducts.value.push(props.products[i])
    }
}
watchEffect(endProducts)
</script>
