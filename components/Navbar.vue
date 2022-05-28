<template>
  <nav :class="{ 'bg-opacity-50': $route.path == '/' }" class="bg-slate-100 h-[100px] font-medium text-lg md:text-xl capitalize tracking-tighter fixed top-0 left-0 z-30 w-full">
    <div class="container mx-auto flex items-center justify-between py-2">
      <NuxtLink to="/"><img class="w-32" src="/statics/brand_o.png" alt="" /></NuxtLink>

      <div class="gap-x-5 items-center hidden @sm:flex sm:flex">
        <NuxtLink to="/" class="text-slate-500 hover:text-slate-700 duration-150 btn relative flex justify-center desktop"> Anasayfa </NuxtLink>
        <NuxtLink to="/services" class="text-slate-500 hover:text-slate-700 duration-150 btn relative flex justify-center desktop"> Hizmetlerimiz </NuxtLink>

        <NuxtLink to="/projects" class="text-slate-500 hover:text-slate-700 duration-150 btn relative flex justify-center desktop"> Projelerimiz </NuxtLink>
        <NuxtLink to="/contact" class="text-slate-500 hover:text-slate-700 duration-150 btn relative flex justify-center desktop"> İletişim </NuxtLink>
      </div>
      <CarbonMenu @click.stop="menu = true" class="w-14 h-14 pr-4 text-slate-600 <sm:block @sm:hidden sm:hidden hover:(text-slate-800 cursor-pointer) duration-200" />

      <Transition name="transition">
        <div @click.self.stop="" class="absolute top-0 right-0 w-[60%] h-screen bg-dark-700" v-if="menu">
          <CarbonClose class="text-slate-300 cursor-pointer hover:text-slate-500 text-2xl ml-auto mt-2 mr-1" />

          <div class="space-y-4 mt-5 font-medium text-4xl flex flex-col md:text-xl capitalize pl-3 tracking-tighter">
            <NuxtLink to="/" class="text-gray-400 hover:text-light-200 duration-150 mobile">Anasayfa</NuxtLink>
            <NuxtLink to="/projects" class="text-gray-400 hover:text-light-200 duration-150 mobile">Projelerimiz</NuxtLink>
            <NuxtLink to="/services" class="text-gray-400 hover:text-light-200 duration-150 mobile">Hizmetlerimiz</NuxtLink>
            <NuxtLink to="/contact" class="text-gray-400 hover:text-light-200 duration-150 mobile">İletişim</NuxtLink>
          </div>
        </div>
      </Transition>
    </div>
  </nav>
</template>


<script lang="ts" setup>
//@ts-ignore
import CarbonDown from '~icons/carbon/chevron-down.svg'
//@ts-ignore
import CarbonMenu from '~icons/carbon/menu'
//@ts-ignore
import CarbonClose from '~icons/carbon/close'

const menu = useMenu()
</script>


<style scoped>
.btn::before {
  position: absolute;
  bottom: 100%;
  z-index: 1;
  content: '';
  width: 0px;
  height: 3px;
  margin: auto;
  border-radius: 2px;
  transition: all 0.3s ease;
  background-color: #1e293b;
}
.btn:hover::before {
  width: 90%;
}

.router-link-exact-active.desktop {
  color: #1e293b;
}
.router-link-exact-active.mobile {
  color: #1e293b;
}
.router-link-exact-active::before {
  width: 40%;
}

.transition-enter-active,
.transition-leave-active {
  transition: all 0.3s ease-in-out;
}

.transition-enter-to,
.transition-leave-from {
  transform: translateX(0px);
}

.transition-enter-from,
.transition-leave-to {
  transform: translateX(100%);
}
</style>

