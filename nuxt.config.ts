// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    css: ['~/assets/styles/main.scss'],
    modules: ['nuxt-icon'],
    app: {
        head: {
          title: 'CRUD | Nuxt',
          meta: [
            {name: 'description', content: 'Everything about Nuxt 3'}
          ],

        }
      },

})
