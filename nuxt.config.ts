// https://v3.nuxtjs.org/api/configuration/nuxt.config

import en from './assets/en/en.json'
import cn from './assets/cn/cn.json'


export default defineNuxtConfig({
    modules: [
        '@nuxtjs/i18n'
      ],
      i18n: {
        // add `vueI18n` option to `@nuxtjs/i18n` module options
        vueI18n: {
          legacy: false,
          locale: 'en',
          messages: {
            en,
            cn
            
          }
        }
      }
})
