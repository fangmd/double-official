export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'Double',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Double' },
      { name: 'keywords', content: 'fangmingdong, blog' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        href:
          'https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css',
        rel: 'stylesheet',
        integrity:
          'sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1',
        crossorigin: 'anonymous',
      },
    ],
    script: [
      {
        src: '/baidu.js',
      },
      // {
      //   src: 'bootstrap/dist/js/bootstrap.bundle.min.js',
      //   body: true,
      // },

      {
        src:
          'https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js',
        integrity:
          'sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW',
        crossorigin: 'anonymous',
        body: true,
      },

      // {
      //   src: 'https://www.gstatic.com/firebasejs/8.2.1/firebase-app.js',
      //   body: true,
      // },
      // {
      //   src: 'https://www.gstatic.com/firebasejs/8.2.1/firebase-analytics.js',
      //   body: true,
      // },
      // {
      //   src: '/firebase.js',
      //   body: true,
      // },
    ],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '~/assets/css/base.less',
    'github-markdown-css/github-markdown.css',
    // 'bootstrap/dist/css/bootstrap.min.css',
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: ['~/plugins/axios', '~plugins/filters.js'],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {
    // baseURL: 'http://localhost:3021',
    baseURL: 'https://api.fangmingdong.com',
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    terser: {
      // https://github.com/terser/terser#compress-options
      terserOptions: {
        compress: {
          drop_console: true,
        },
      },
    },
  },
  server: {
    port: 3020,
    host: '0.0.0.0',
  },
}
