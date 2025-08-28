export default defineNuxtConfig({
  compatibilityDate: '2025-08-08',
  css: ['@/assets/css/tailwind.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  router: {
    base: '/ja-quote-replacer/'
  },
  generate: {
    dir: 'docs'
  },
  ssr: false,
  app: {
    baseURL: '/ja-quote-replacer/',
  },
})