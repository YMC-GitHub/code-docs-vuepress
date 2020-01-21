---
sidebar: auto
---

# document

## doc

### add a doc with nav

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

### add some docs with nav

  01. add doc dir demos in your docs

  02. add nav /demos/ for your doc files demos/*.md

<common-demoCode>
  <div slot="codeText">

```js
  //nav/en.js
  {
    text: 'Demos',
    link: '/demos'
  }
  //nav/zh.js
  {
    text: '示例',
    link: '/demos'
  }
```

  </div>
</common-demoCode>

### add a doc without nav in a sub url

  01. add doc file xx.md in your docs demos/ path

  02. has sidebar? add sidebar xx for your doc files demos/xx.md

<common-demoCode>
  <div slot="codeText">

```js
  //sidebar/demos.js
  [
  '',//
  'xx'// for xx.md
  ]
```
  </div>
</common-demoCode>


### add a doc without nav in a sub url as index file

  01. add doc file README.md in your docs demos/ path

  02. has sidebar? add sidebar for your doc files demos/README.md

<common-demoCode>
  <div slot="codeText">

```js
  //sidebar/demos.js
  [
  '',// for README.md
  'xx'
  ]
```
  </div>
</common-demoCode>

