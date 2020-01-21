//const { fs, path } = require('@vuepress/shared-utils')
const fs = require('fs')
const path = require('path')

const rootPath = path.resolve(__dirname, '../../../../')

const demos = fs
  .readdirSync(path.resolve(rootPath, `docs/demos/`))
  .map(filename => filename.slice(0, -3))
  .sort()
console.log(demos)
module.exports = [
  '',
  'Basic',
  'Center',
  'CoverFlow',
  'Fade',
  'Loop',
  'Multiple',
  'Nest',
  'RenderPagination',
  'VariableWidth',
  'Vertical',
]
