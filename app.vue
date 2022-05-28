<template>
  <div @click="menu = false">
    <Navbar />
    <NuxtPage :class="{ 'mt-[97.25px]': $route.path !== '/' }" />
  </div>
</template>


<script lang="ts" setup>
const menu = useMenu()
</script>
