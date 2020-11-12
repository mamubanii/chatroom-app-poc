const config = {
  serverHost: process.env.NODE_ENV !== "production" ? "localhost" : "0.0.0.0",
  serverPort: 3000,
};

export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: "chatroom-app-poc",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    "@nuxt/typescript-build",
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {
    baseURL: "http://" + config.serverHost + ":" + config.serverPort, // Used as fallback if no runtime config is provided
  },

  publicRuntimeConfig: {
    axios: {
      browserBaseURL: process.env.BROWSER_BASE_URL,
    },
  },

  privateRuntimeConfig: {
    axios: {
      baseURL: process.env.BASE_URL,
    },
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},

  // Server configuration
  server: {
    port: config.serverPort, // default: 3000
    host: config.serverHost, // default: localhost, set to 0.0.0.0 to deploy
    timing: false,
  },

  // Server API
  serverMiddleware: { "/api": "~/api" },
};
