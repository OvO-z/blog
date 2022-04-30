const path = require("path");
const { config } = require("process");
const resolve = dir => path.join(__dirname, dir);

const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: [
    'vuetify'
  ],
  configureWebpack: {
    resolve: {
      alias: {
        '@': resolve('src'),
        '@views': resolve('src/views'),
        '@assets': resolve('src/assets'),
      }
    }
  }
})
