const isProd = process.env.NODE_ENV !== 'development'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: isProd,
  typescript: {
    strict: true,
    tsConfig: {
      compilerOptions: {
        extensions: ['.vue', '.ts', '.js', '.jsx', '.tsx', '.json']
      }
    }
  }
})
