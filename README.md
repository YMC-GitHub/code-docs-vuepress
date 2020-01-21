## Quick start

01.get the code

```html
git clone https://github.com/YMC-GitHub/lib-doc-tpl-with-vuepress.git
```

02.install his dep

```html
npm install
```

03.run in dev mode

```html
npm run docs:dev
```

04.run in pro mode

```html
npm run docs:build
```

05.release to you platform

```html
./relaseh.sh
```

## Configuring dev

01.where the host is?
```js
//server.config.js
  host: '0.0.0.0',
```

02.which port will use?
```js
//server.config.js
  port: 8000,
```

03.where the html file to serve?

```js
//server.config.js
  dest: 'docs/.vuepress/dist',
```

04.has the base url?
```js
//server.config.js
  base: '/lib-doc-tpl-with-vuepress/'
```


## Configuring pro

01.has the base url?
```js
//server.config.js
  base: '/lib-doc-tpl-with-vuepress/'
```

02.add custom ico?
```js
//head.config.js
  ['link', { rel: 'icon', href: '/favicon.ico' }]
```

03.set you title for html file?
```js
//title.config.js
  'en': {
    title: 'lib-doc-tpl-with-vuepress'
  },
  'zh': {
    title: 'lib-doc-tpl-with-vuepress'
  }
```

## Configuring release

### push to https://<USERNAME>.github.io/<REPO> ?

00.open or colse,true:"0",false:"1"
```html
#deploy.sh
A="0"
```

01.set your github user
```html
#deploy.sh
REPO_USER="YMC-GitHub"
```

02.set your github repo
```html
#deploy.sh
REPO_NAME="lib-doc-tpl-with-vuepress"
```

03.set your local git repo branch
```html
#deploy.sh
LOCAL_BRANCH="master"
```

04.set your remote git repo branch
```html
#deploy.sh
REMOTE_BRANCH="gh-pages"
```

05.set your your doc is
```html
#deploy.sh
DOCS_DIR="docs/.vuepress/dist"
```


05.has a custom domain?
```html
#deploy.sh
CUSTOM_DOMAIN="" #www.example.com
```

### push to https://<USERNAME>.github.io?

00.open or close,true:"0",false:"1"
```html
#deploy.sh
A="0"
```

01.set your github user
```html
#deploy.sh
REPO_USER="YMC-GitHub"
```

02.set your github repo
```html
#deploy.sh
REPO_NAME="lib-doc-tpl-with-vuepress"
```

03.set your local git repo branch
```html
#deploy.sh
LOCAL_BRANCH="master"
```

04.set your remote git repo master branch
```html
#deploy.sh
MASTER_BRANCH="master"
```

05.set your your doc is
```html
#deploy.sh
DOCS_DIR="docs/.vuepress/dist"
```


05.has a custom domain?
```html
#deploy.sh
CUSTOM_DOMAIN="" #www.example.com
```
