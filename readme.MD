<img src="chiquito-responsive.jpg" style="width: 100%">

Chiquito Ipsum: a lorem ipsum generator based on www.chiquitoipsum.com... jarl!

This ultra simple API has been designed following the exact same features found on its original website. Thanks to the creators: [Isabel Nieto](https://www.behance.net/IsabelNieto), [Carlos A. Hernández](https://www.calberhs.com/) and [Gauss Multimedia](https://www.gaussmultimedia.com/).

## API

```GET https://chiquito-ipsum.herokuapp.com/<PARAGRAPHS>/<MODE>```

Parameters | default | description
-----------|---------|------------
(optional) paragraphs |1        | How many paragraphs you need
(optional) mode |`default`        | `default` for regular chiquito fistrum style and `latin` for the more latin version

### Examples

```https://chiquito-ipsum.herokuapp.com```
 
This will just return 1 HTML paragraph in fistrum mode 


```https://chiquito-ipsum.herokuapp.com/2```

This will return 2 HTML paragraphs in default mode

```https://chiquito-ipsum.herokuapp.com/2/latin```

This will return 2 HTML paragraphs in latin mode
 
## How to use it in your website

```js
const agramenauer = async() => {
  const response = await fetch('https://chiquito-ipsum.herokuapp.com');
  const html = await response.text()
  return html
}

agramenauer().then(html => document.body.innerHTML = html)
```

👉[Check it out this code on jsfiddle](https://jsfiddle.net/jdvivar/7nra2d3f/)