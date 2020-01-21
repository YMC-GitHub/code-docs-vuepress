---
sidebar: false
---
<common-demoItem></common-demoItem>
::: slot name
add a doc
:::

::: slot content
<common-demoCode>
  <effect-sliderBasic></effect-sliderBasic>
</common-demoCode>


 ### install

  01. get the code

  02. install his dep

<common-demoCode>
  <div slot="codeText">

```html
git clone https://github.com/YMC-GitHub/blog-tpl-vuepress.git
npm install
```

  </div>
</common-demoCode>




### add a doc

  01. add doc file config.md in your docs

  02. add nav /config for your doc file config.md

<common-demoCode>
  <div slot="codeText">

```js
  //nav/en.js
  {
    text: 'Config',
    link: '/config'
  }
  //nav/zh.js
  {
    text: '配置',
    link: '/config'
  }
```

  </div>
</common-demoCode>

:::
