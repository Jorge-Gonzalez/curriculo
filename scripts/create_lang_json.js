const jsonfile = require('jsonfile')
const _ = require('./functional')

const curriculo = jsonfile.readFileSync('build/curriculo.json', {encoding: 'utf8'})

const mapLang = _.curry2(
  (lang, data) => _.map(
    node => _.has(lang, node)
      ? node[lang]
      : _.isObject(node)
      ? mapLang(lang, node)
      : node,
    data
  )
)

const stripLang = (lang) => _.pipe(
  mapLang(lang),
  _.assoc('lang', lang)
)


let stripSpanish = stripLang('es')
let stripEnglish = stripLang('en')

jsonfile.writeFileSync('build/curriculo.es.json', stripSpanish(curriculo), {encoding: 'utf8', spaces: 2})
jsonfile.writeFileSync('build/curriculo.en.json', stripEnglish(curriculo), {encoding: 'utf8', spaces: 2})
