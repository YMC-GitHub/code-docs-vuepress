---
sidebar: true
---
<common-demoItem></common-demoItem>
::: slot name
add a doc
:::

::: slot content
<common-demoCode>
  <effect-sliderBasic></effect-sliderBasic>
</common-demoCode>


## Configuring dev

01.where the host is?

<common-demoCode>
  <div slot="codeText">

```js
//server.config.js
  host: '0.0.0.0',
```
  </div>
</common-demoCode>

02.which port will use?

<common-demoCode>
  <div slot="codeText">

```js
//server.config.js
  port: 8000,
```

  </div>
</common-demoCode>



03.where the html file to serve?

<common-demoCode>
  <div slot="codeText">

```js
//server.config.js
  dest: 'docs/.vuepress/dist',
```

  </div>
</common-demoCode>




04.has the base url?

<common-demoCode>
  <div slot="codeText">

```js
//server.config.js
  base: '/lib-doc-tpl-with-vuepress/'
```

  </div>
</common-demoCode>



## Configuring pro

01.has the base url?

<common-demoCode>
  <div slot="codeText">

```js
//server.config.js
  base: '/lib-doc-tpl-with-vuepress/'
```

  </div>
</common-demoCode>




02.add custom ico?

<common-demoCode>
  <div slot="codeText">

```js
//head.config.js
  ['link', { rel: 'icon', href: '/favicon.ico' }]
```

  </div>
</common-demoCode>



03.set you title for html file?

<common-demoCode>
  <div slot="codeText">

```js
//title.config.js
  'en': {
    title: 'lib-doc-tpl-with-vuepress'
  },
  'zh': {
    title: 'lib-doc-tpl-with-vuepress'
  }
```

  </div>
</common-demoCode>


## Configuring release

> push to https://\<USERNAME\>.github.io/\<REPO\> ?

00.open or colse,true:"0",false:"1"

<common-demoCode>
  <div slot="codeText">

```html
#deploy.sh
A="0"
```

  </div>
</common-demoCode>



01.set your github user

<common-demoCode>
  <div slot="codeText">

```html
#deploy.sh
REPO_USER="YMC-GitHub"
```

  </div>
</common-demoCode>




02.set your github repo

<common-demoCode>
  <div slot="codeText">

```html
#deploy.sh
REPO_NAME="lib-doc-tpl-with-vuepress"
```

  </div>
</common-demoCode>


03.set your local git repo branch

<common-demoCode>
  <div slot="codeText">

```html
#deploy.sh
LOCAL_BRANCH="master"
```

  </div>
</common-demoCode>


04.set your remote git repo branch

<common-demoCode>
  <div slot="codeText">

```html
#deploy.sh
REMOTE_BRANCH="gh-pages"
```

  </div>
</common-demoCode>



06.set your your doc is

<common-demoCode>
  <div slot="codeText">

```html
#deploy.sh
DOCS_DIR="docs/.vuepress/dist"
```

  </div>
</common-demoCode>



05.has a custom domain?

<common-demoCode>
  <div slot="codeText">

```html
#deploy.sh
CUSTOM_DOMAIN="" #www.example.com
```

  </div>
</common-demoCode>


> push to https://\<USERNAME\>.github.io?

00.open or close,true:"0",false:"1"

<common-demoCode>
  <div slot="codeText">

```html
#deploy.sh
A="0"
```

  </div>
</common-demoCode>



01.set your github user

<common-demoCode>
  <div slot="codeText">

```html
#deploy.sh
REPO_USER="YMC-GitHub"
```

  </div>
</common-demoCode>


02.set your github repo

<common-demoCode>
  <div slot="codeText">

```html
#deploy.sh
REPO_NAME="lib-doc-tpl-with-vuepress"
```
  </div>
</common-demoCode>


03.set your local git repo branch

<common-demoCode>
  <div slot="codeText">

```html
#deploy.sh
LOCAL_BRANCH="master"
```
  </div>
</common-demoCode>



04.set your remote git repo master branch

<common-demoCode>
  <div slot="codeText">

```html
#deploy.sh
MASTER_BRANCH="master"
```

  </div>
</common-demoCode>



05.set your your doc is


<common-demoCode>
  <div slot="codeText">

```html
#deploy.sh
DOCS_DIR="docs/.vuepress/dist"
```

  </div>
</common-demoCode>




06.has a custom domain?

<common-demoCode>
  <div slot="codeText">

```html
#deploy.sh
CUSTOM_DOMAIN="" #www.example.com
```

  </div>
</common-demoCode>



:::
