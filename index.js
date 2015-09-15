var annotator = require('commonform-phrase-annotator')
var crutches = require('american-legal-crutches')

module.exports = annotator(crutches, function(form, path, expression, match) {
  return {
    message: '"' + match[0] + '" is overused.',
    level: 'info',
    source: 'commonform-overused',
    path: path,
    url: null } })
