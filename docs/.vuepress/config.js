const { fs, path } = require('@vuepress/shared-utils')
const locales = require('./config/locales.config')
const head = require('./config/head.config')
const serverConfig = require('./config/server.config')
const titleConfig = require('./config/title.config')
module.exports = {
  title: titleConfig.en.title,
  description: 'vue-concise-slider,A simple sliding component,has easy configuration,support self-adaption / fullscreen / button / page,and is compatible with mobile and PC terminal',
  head: head,
  host: serverConfig.host,
  port: serverConfig.port,
  base: serverConfig.base,
  dest: serverConfig.dest,
  locales: locales.locales,
  themeConfig: {
    locales: locales.themeConfig.locales
  },
  extraWatchFiles: [
    '.vuepress/data/sidebar/demos.js',
    '.vuepress/config/*'
  ]
}

