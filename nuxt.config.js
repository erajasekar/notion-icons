
const description = 'Notion Icons is a tool to easily add beautiful Icons to your Notion Notes'
const baseUrl = 'https://notion.erajasekar.com'
const siteName = 'Notion Icons'

export default {
  /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */
  mode: 'spa',

  router: {
    base: '/nuxt-gh-pages/'
  },
  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
  /*target: 'static',*/
  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  head: {
    title: process.env.npm_package_description || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', description },
      { name: 'keywords', content: 'Notion, Icons, Note Taking, Notes' },
      { name: 'robots', content: 'index, follow' },
      { name: 'google-site-verification', content: 'TODO' },
      { name: 'author', content: 'Rajasekar Elango' },
      { property: 'og:type', content: 'website' },
      { property: 'og:title', content: process.env.npm_package_description },
      { property: 'og:site_name', content: siteName },
      { property: 'og:description', content: description },
      { property: 'og:image', content: baseUrl + 'TODO' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: process.env.npm_package_description },
      { property: 'twitter:site', content: siteName },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: baseUrl + 'TODO' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Global CSS
  */
  css: [
    '@/assets/scss/main.scss'
  ],
  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: ['~/plugins/global-components.ts'
  ],
  /*
  ** Auto import components
  ** See https://nuxtjs.org/api/configuration-components
  */
  components: true,
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/eslint-module',
    '@nuxtjs/tailwindcss'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://buefy.github.io/#/documentation
    'nuxt-buefy',
    'nuxt-clipboard2',
    'vue-swatches/nuxt'
  ],
  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
  build: {
  }
}
