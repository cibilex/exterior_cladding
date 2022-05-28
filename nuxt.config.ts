import { defineNuxtConfig } from 'nuxt'

export default defineNuxtConfig({
  buildModules: [
    'nuxt-windicss',
    [
      'unplugin-icons/nuxt',
      {
        /* options */
      }
    ]
  ],
  css: ['~/assets/main.css', 'swiper/css', 'swiper/css/pagination', 'swiper/css/effect-coverflow', 'swiper/css/navigation']
})
