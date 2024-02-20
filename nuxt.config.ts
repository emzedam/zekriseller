// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@pinia/nuxt'
  ],
  build:{
    transpile: ['vue-toastification']
  },
  pinia: {
    autoImports: [
      'defineStore',
    ],
  },
  mapbox: {
    accessToken: 'pk.eyJ1IjoiaHNuZW16ZWQiLCJhIjoiY2xvcGdxOTI4MGEweTJpazRmM2JsYjA5YSJ9.8eqD-GBF4CO9Ma8aSYlM8A'
  },
  css: ['~/assets/css/main.css','~/assets/css/fonts/icons/icons.css','~/assets/css/fonts/iconmarket.css'],
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      htmlAttrs: {
        dir: 'rtl'
      },
      title: "پنل فروشندگی ذکری مارکت",
      meta: [
        { name: 'description', content: 'My amazing site.' }
      ],
      bodyAttrs: {
        class: 'font-fa'
      }
    }
  },
})
