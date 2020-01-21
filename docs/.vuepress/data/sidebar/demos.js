//const { fs, path } = require('@vuepress/shared-utils')
const fs = require('fs')
const path = require('path')

const rootPath = path.resolve(__dirname, '../../../../')
const demos = fs
  .readdirSync(path.resolve(rootPath, `docs/demos/`))
  .map(filename => {
    //delete .md in xx.md
    let name = filename.slice(0, -3)
    name = name.toUpperCase() === 'README' ? '' : name
    return name
  })
  .sort()
// console.log(demos)
//require('../../utils').getDir(`docs/demos/`)
module.exports = demos
