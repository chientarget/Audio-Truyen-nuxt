// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  future: {
      compatibilityVersion: 4,
  },

  experimental: {
      sharedPrerenderData: false,
      compileTemplate: true,
      resetAsyncDataToUndefined: true,
      templateUtils: true,
      relativeWatchPaths: true,
      defaults: {
          useAsyncData: {
              deep: true,
          },
      },
  },

  unhead: {
      renderSSRHeadOptions: {
          omitLineBreaks: false,
      },
  },

  image: {
      domains: ["https://cdn.dummyjson.com"],
  },

  devtools: {enabled: true},
  modules: ["@nuxtjs/tailwindcss", "@nuxt/icon", "@nuxtjs/google-fonts", "@nuxt/image"],

  antDesignVue: {
      import: ['Form', 'FormItem', 'Input', 'Checkbox', 'Button'],
  },

  googleFonts: {
      families: {
          Montserrat: true,
      },
  },

  router: {
      routes: [
          {
              path: '/socket.io',
              redirect: '/' // hoặc có thể dùng component empty
          },
          {
              path: '/socket.io/**', // Match all socket.io paths
              redirect: '/'
          }
      ]
  },

  devServer: {
          port: 3388
      },

  compatibilityDate: '2024-10-20'
});