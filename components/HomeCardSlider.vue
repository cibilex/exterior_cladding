<template>
  <div>
    <h2 class="text-center text-5xl font-body">Projelerimiz</h2>
    <swiper
      class="swiper"
      :modules="[Navigation, EffectCoverflow]"
      :effect="'coverflow'"
      navigation
      :grab-cursor="true"
      :centered-slides="true"
      :slides-per-view="'auto'"
      :initial-slide="3"
      :coverflow-effect="{
        rotate: 60,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true
      }"
    >
      <swiper-slide class="slide" v-for="(img, index) in imgs" :key="img">
        <div class="p-3 h-full border shadow-lg border-slate-500 rounded-md">
          <img :src="img" class="w-full shdaow-md rounded-lg h-48 object-cover" />
          <h1 class="text-center font-body md:max-w-[80%] mx-auto text-lg font-medium mt-2 capitalize text-black opacity-100">SüleymanPaşa Belediye binası</h1>
          <div class="flex justify-between mt-2">
            <small>17.08.2020</small>
            <small>Süleymanpaşa/Tekirdağ</small>
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script lang="ts" setup>
import { Pagination, EffectCoverflow, Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'

const imgs = ['/statics/home_card/building1.jpeg', '/statics/home_card/building2.jpeg', '/statics/home_card/building3.jpeg', '/statics/home_card/building4.jpeg', '/statics/home_card/building5.jpeg', '/statics/home_card/building6.jpeg', '/statics/home_card/building7.jpeg', '/statics/home_card/building8.jpeg', '/statics/home_card/building9.jpeg']
</script>

<style  scoped>
.swiper {
  padding: 15px;
}
.slide {
  width: 350px;
}
@media screen and (max-width: 450px) {
  .slide {
    width: 320px;
  }
}
@media screen and (min-width: 600px) {
  .slide {
    width: 450px;
  }
}
@media screen and (min-width: 1024px) {
  .slide {
    width: 520px;
  }
}
</style>