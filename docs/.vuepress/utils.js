const fs = require('fs')
const path = require('path')

const rootPath = path.resolve(__dirname, '../../')

exports.getDir = file => fs
  .readdirSync(path.resolve(rootPath, file))
  .map(filename => {
    //delete .md in xx.md
    let name = filename.slice(0, -3)
    //replace 'README' with ''
    name = name.toUpperCase() === 'README' ? '' : name
    return name
  })
  .sort()
//eg.
//getDir(`docs/demos/`)
