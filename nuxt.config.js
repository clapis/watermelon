
export default {
  /*
  ** Headers of the page
  */
  head: {
    title: 'dotnet jobs',
    htmlAttrs: { lang: 'en' },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, shrink-to-fit=no' },
      { hid: 'description', name: 'description', content: 'dotnet .net jobs in the netherlands' },
      { name: 'msapplication-TileColor', content: '#ffc40d' },
      { name: 'theme-color', content: '#ffffff' }
    ],
    link: [
      { rel: 'dns-prefetch', href: process.env.API_URL },
      { rel: 'preconnect', href: process.env.API_URL },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
      { rel: 'manifest', href: '/site.webmanifest' },
      { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#5bbad5' },
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    '@/assets/main.scss'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    ['@nuxtjs/google-analytics', {
      id: 'UA-173518469-2'
    }]
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/style-resources',
    'bootstrap-vue/nuxt',
  ],
  styleResources: {
    scss: '@/assets/_variables.scss'
  },
  /*
  **  Disable automatic inclusion of Bootstrap and BootstrapVue pre-compiled CSS files
  */
  bootstrapVue: {
    icons: false,
    bootstrapCSS: false,
    bootstrapVueCSS: false,
    directives: ['VBToggle'],
    components: ['BNavbar', 'BNavbarNav', 'BNavbarBrand', 'BNavbarToggle', 'BNavItem', 'BButton', 'BCollapse']
  },
  publicRuntimeConfig: {
    apiUrl: process.env.API_URL,
    publicUrl: process.env.PUBLIC_URL,
    stripeKey: process.env.STRIPE_KEY
  },
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
    baseURL: process.env.API_URL
  },
  serverMiddleware: [
    (req, res, next) => {
      res.setHeader('Cache-Control', 's-maxage=10, stale-while-revalidate')
      next()
    }
  ]
}
