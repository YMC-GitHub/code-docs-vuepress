const dataNavEN = require('../data/nav/en')
const dataNavZH = require('../data/nav/zh')
const dataSidebarDemo = require('../data/sidebar/demos')
const titleConfig = require('./title.config')
module.exports = {
  locales: {
    // the key is the base url for some language
    //use en as default language here
    '/': {
      lang: 'en-US', // 将会被设置为 <html> 的 lang 属性
      title: titleConfig.en.title
    },
    //for language zh
    /*
    '/zh/': {
      lang: 'zh-CN',
      title: titleConfig.zh.title
    }
    */
  },
  themeConfig: {
    locales: {
      '/': {
        selectText: 'Languages',
        label: 'English',
        nav: dataNavEN,
        sidebar: {
          //'/demos/': dataSidebarDemo
        }
      },
      /*
      '/zh/': {
        // 多语言下拉菜单的标题
        selectText: '选择语言',
        // 该语言在下拉菜单中的标签
        label: '简体中文',
        nav: dataNavZH,
        sidebar: {
          //'/zh/demos/': dataSidebarDemo
        }
      }
      */
    }
  }
}
