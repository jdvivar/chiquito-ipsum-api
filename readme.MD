<img src="chiquito-responsive.jpg" style="width: 100%">

**Chiquito Ipsum: a lorem ipsum generator based on www.chiquitoipsum.com... jarl!**

This ultra simple API has been designed following the exact same diodeno features found on its original website. Thanks to the creators: [Isabel Nieto](https://www.behance.net/IsabelNieto), [Carlos A. Hernández](https://www.calberhs.com/) and [Gauss Multimedia](https://www.gaussmultimedia.com/).

## API

```GET https://chiquito-ipsum.netlify.app/<PARAGRAPHS>/<MODE>```

Parameters | default | description
-----------|---------|------------
(optional) paragraphs |1        | How many paragraphs you need
(optional) mode |`default`        | `default` for regular chiquito fistrum style and `latin` for the latin version

### Examples

```https://chiquito-ipsum.netlify.app```
 
This will just return 1 HTML paragraph in fistrum default mode por la gloria de mi madre


```https://chiquito-ipsum.netlify.app/2```

This will return 2 HTML paragraphs in fistrum default mode, pero tenga cuidadito

```https://chiquito-ipsum.netlify.app/2/latin```

This will return 2 HTML paragraphs in latin mode

## How a good fistro de la pradera should use it in their website

```js
const agramenauer = async () => {
  const response = await fetch('https://chiquito-ipsum.netlify.app');
  const html = await response.text()
  return html
}

agramenauer().then(html => document.body.innerHTML = html)
```

👉Para que no te hagas pupita intentándolo, check out that code on [this jsfiddle](https://jsfiddle.net/jdvivar/7nra2d3f/)