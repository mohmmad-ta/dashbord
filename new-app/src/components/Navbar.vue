<script setup>
import {RouterLink} from "vue-router";
</script>

<template>
    <header class="fixed top-0 left-0 w-screen z-20 h-16 flex items-center justify-around bg-zinc-100">
        <img alt="Vue logo" class="w-9 " src="@/assets/logo.svg" />
        <nav class=" flex items-center h-16 gap-4 text-gray-400 font-bold">
            <RouterLink to="/" class="hover:text-gray-500 duration-150">New Product</RouterLink>
            <RouterLink to="/all" class="hover:text-gray-500 duration-150">All Product</RouterLink>
        </nav>
    </header>
</template>
<style scoped>
nav a.router-link-exact-active {
    color: #ef4444;
}
</style>