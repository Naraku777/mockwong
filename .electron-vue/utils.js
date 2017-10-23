// .electron-vue/utils.js

const fs = require('fs')

/**
 * Get variables from .less file
 * 
 * @param {string} file - file path
 * @returns 
 */
exports.getLessVariables = function (file) {
  const themeContent = fs.readFileSync(file, 'utf-8')
  const variables = {}

  themeContent.split('\n').forEach(function (item) {
    if (item.indexOf('//') > -1 || item.indexOf('/*') > -1) {
      return
    }

    const _pair = item.split(':')
    if (_pair.length < 2) return

    const key = _pair[0].replace('\r', '').replace('@', '')
    if (!key) return

    const value = _pair[1]
      .replace(';', '')
      .replace('\r', '')
      .replace(/^\s+|\s+$/g, '')

    variables[key] = value
  })

  return variables
}