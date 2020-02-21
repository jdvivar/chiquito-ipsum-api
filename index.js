const express = require('express')
const app = express()
const port = 80

const { getChiquitoIpsum } = require('./chiquito-ipsum')

app.get('/:paras?/:mode?', function ({ params: { mode, paras } }, res) {
  console.log(`received a request with mode ${mode} and ${paras}`)
  res.send(getChiquitoIpsum({ mode, paras }))
})

app.listen(port, () => console.log(`Chiquito ipsum listening on port ${80}!`))
