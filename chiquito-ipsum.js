var chiquitoArray = ['fistro', 'torpedo', 'pecador', 'sexuarl', 'por la gloria de mi madre', 'diodeno', 'condemor', 'jarl', 'ese que llega', 'pupita', 'la caidita', 'te voy a borrar el cerito', 'al ataquerl', 'a wan', 'a peich', 'a gramenawer', 'no puedor', 'hasta luego Lucas', 'mamaar', 'apetecan', 'caballo blanco caballo negroorl', 'ese pedazo de', 'benemeritaar', 'te va a hasé pupitaa', 'de la pradera', 'ese hombree', 'quietooor', 'qué dise usteer', 'no te digo trigo por no llamarte Rodrigor', 'está la cosa muy malar', 'tiene musho peligro', 'ahorarr', 'diodenoo', 'amatomaa', 'me cago en tus muelas', 'llevame al sircoo', 'papaar papaar', 'se calle ustée', 'va usté muy cargadoo']
var latinArray = ['sit amet', 'consectetur', 'adipisicing', 'elit', 'sed', 'eiusmod', 'tempor', 'incididunt', 'ut', 'labore', 'et', 'dolore', 'magna', 'aliqua', 'enim', 'ad', 'minim', 'veniam', 'quis', 'nostrud', 'exercitation', 'ullamco', 'laboris', 'nisi', 'ut', 'aliquip', 'ex', 'commodo', 'consequat', 'duis', 'aute', 'irure', 'dolor', 'reprehenderit', 'voluptate', 'velit', 'esse', 'cillum', 'occaecat', 'qui', 'officia']

var paragraphNumber
var firstLine = true

function generateRandom (initialValue, endValue) {
  /* Generate a random number between initialValue and endValue */
  var randomInterval
  var randomValue
  if (endValue >= initialValue) {
    randomInterval = endValue - initialValue
    randomValue = Math.floor(Math.random() * randomInterval) + initialValue
  } else {
    randomInterval = initialValue - endValue
    randomValue = Math.floor(Math.random() * randomInterval) + endValue
  }
  return randomValue
}

function generateLine (wordsArray) {
  /* generate a line of random words */
  var oneLine = ''
  var wordRandom = ''
  var wordsNumber = generateRandom(4, 12)
  var wordRandomIndex
  var lastWordExclamation = false
  var i

  wordRandomIndex = generateRandom(0, wordsArray.length)

  if (firstLine) {
    oneLine = 'Lorem fistrum'
    firstLine = false
  } else {
    oneLine = wordsArray[wordRandomIndex]
  }

  for (i = 1; i < wordsNumber; i++) {
    wordRandomIndex = generateRandom(0, wordsArray.length)
    wordRandom = wordsArray[wordRandomIndex]

    /* If the last word has an exclamation, it set the following letter to capital */
    if (lastWordExclamation === true) {
      wordRandom = wordRandom[0].toUpperCase() + wordRandom.substring(1)
      lastWordExclamation = false
    }

    if (wordRandom.charAt(wordRandom.length - 1) === '!') {
      lastWordExclamation = true
    } else {
      lastWordExclamation = false
    }

    oneLine = oneLine + ' ' + wordRandom
  }

  oneLine = oneLine[0].toUpperCase() + oneLine.substring(1)

  /* Add a period to the end of the line, unless the last character is an exclamation mark */
  if (oneLine.charAt(oneLine.length - 1) === '!') {
    oneLine = oneLine + ' '
  } else {
    oneLine = oneLine + '. '
  }

  return oneLine
}

function generateParagraph (wordsArray) {
  /* Generate a paragraph with lines */
  var oneParagraph = ''
  var linesNumber = generateRandom(5, 10)
  var i

  oneParagraph = generateLine(wordsArray)

  for (i = 1; i < linesNumber; i++) {
    oneParagraph = oneParagraph + generateLine(wordsArray)
  }

  /* Wrap the paragraph inside <p> tags */
  oneParagraph = '<p>' + oneParagraph + '</p>'

  return oneParagraph
}

function generateFullText (wordsArray) {
  /* Put together the number of paragraphs set by the user */
  var FullText = ''
  var i

  FullText = generateParagraph(wordsArray)

  for (i = 1; i < paragraphNumber; i++) {
    FullText = FullText + generateParagraph(wordsArray)
  }
  return FullText
}

// ALL THE CODE UP TO HERE IS ORIGINALLY FROM
// http://www.chiquitoipsum.com/js/main.js
//
// I tried to keep the original code as intact as possible,
// although a good refactor would be advisable
//
// Changes:
// 1 - Frontend code written with jQuery has been removed
// 2 - Standard has been used as linter and all errors have been fixed automatically
//
// From here on, the exposed code for the API, following the same features
// visible on their website:

function getChiquitoIpsum (options) {
  options = options || {}
  const bagOfWords = options.mode === 'latin' ? latinArray : chiquitoArray
  const paras = options.paras || 1

  return generateFullText.bind(paragraphNumber = paras)(bagOfWords)
}

module.exports = { getChiquitoIpsum }
