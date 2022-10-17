const { getChiquitoIpsum } = require('../../../chiquito-ipsum')

const handler = async event => {
  try {
    let [, paras, mode] = event.path.split('/')

    console.log(`Received a request with mode ${mode} and ${paras}`)

    if (paras > 10) {
      console.warn('API doesn\'t allow more than 10 paragraphs')
      paras = 10
    }

    return {
      statusCode: 200,
      body: getChiquitoIpsum({ mode, paras }),
      headers: {
        'content-type': 'text/html; charset=UTF-8'
      }
    }
  } catch (error) {
    return {
      statusCode: 500,
      body: error.toString()
    }
  }
}

module.exports = { handler }
