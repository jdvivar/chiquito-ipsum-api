const express = require('express')
const app = express()

app.set('port', (process.env.PORT || 8080));

const { getChiquitoIpsum } = require('./chiquito-ipsum')

app.get('/:paras?/:mode?', function ({ params: { mode, paras } }, res) {
  console.log(`received a request with mode ${mode} and ${paras}`)
  if (paras > 10) {
    console.warn("API doesn't allow more than 10 paragraphs")
    paras = 10
  }
  res.send(getChiquitoIpsum({ mode, paras }))
})

app.listen(app.get('port'), () => console.log(`Chiquito ipsum listening on port ${app.get('port')}!`))