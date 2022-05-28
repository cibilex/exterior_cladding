<template>
  <div>
    <swiper class="swiper" :modules="[Pagination, Autoplay, EffectFade]" :effect="'fade'" :slides-per-view="1" :space-between="30" :loop="true" :pagination="{ clickable: true }" :autoplay="autoPlayOptions">
      <swiper-slide v-for="bg in slidesBg" :key="bg">
        <div class="w-screen h-screen relative bg-cover <sm:bg-center bg-no-repeat" :style="`background-image: url('${bg}')`">
          <div class="container mx-auto pt-28 md:pt-48">
            <h1 class="font-head text-7xl animate-animated animate-fadeInLeft md:text-8xl pl-3 md:pl-0 text-slate-800 tracking-wide">
              <span id="head" class="text-red-500">Trakya</span>'nın
              <div class="md:hidden"></div>
              En İYİSİ
            </h1>
            <a href="tel:+905426658239" class="px-6 py-3 animate-animated animate-fadeInLeft animate-fast animate-delay-1s rounded-full shadow-lg hover:(text-blue-700 border-blue-700 bg-blue-100 bg-opacity-60) duration-200 active:bg-blue-400 border-blue-600 rounded-sm text-blue-600 font-medium border text-xl mt-7 inline-block ml-4">Bize Ulaşın</a>
          </div>

          <div class="group w-7">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 absolute bottom-4 left-12 cursor-pointer fill-slate-500 group-hover:fill-slate-700" viewBox="0 0 320 512">
              <path d="M9.375 329.4c12.51-12.51 32.76-12.49 45.25 0L128 402.8V32c0-17.69 14.31-32 32-32s32 14.31 32 32v370.8l73.38-73.38c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-128 128c-12.5 12.5-32.75 12.5-45.25 0l-128-128C-3.125 362.1-3.125 341.9 9.375 329.4z" />
            </svg>
          </div></div
      ></swiper-slide>
    </swiper>
  </div>
</template>

<script lang="ts" setup>
import { defineComponent } from 'vue'
import { Pagination, Autoplay, EffectFade } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/pagination'
// import 'swiper/css/navigation'
import 'swiper/css/autoplay'
import 'swiper/css/effect-fade'

import { AutoplayOptions } from 'swiper/types'

const autoPlayOptions: AutoplayOptions = {
  delay: 15000,
  disableOnInteraction: false
}

const slidesBg = ['/load/pexels-photomix-company-565324.jpg', '/load/pexels-brett-sayles-2606383.jpg', '/load/omar-flores-xkoegrJfrBU-unsplash.jpg']
</script>




<style>
#head {
  background: linear-gradient(to right, #30cfd0 0%, #330867 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>