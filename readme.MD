# Chiquito Ipsum API

This ultra simple API is based on the work found at http://www.chiquitoipsum.com/

## API

```GET http://chiquito-ipsum.danielvivar.com/<PARAGRAPHS>/<MODE>```

Parameters | default | description
-----------|---------|------------
(optional) paragraphs |1        | How many paragraphs you need
(optional) mode |`default`        | `default` for regular chiquito style and `latin` for the a closer lorem ipsum version

### Examples

```http://chiquito-ipsum.danielvivar.com```
 
This will just return 1 paragraph in default mode


```http://chiquito-ipsum.danielvivar.com/2```

This will return 2 paragraphs in default mode

```http://chiquito-ipsum.danielvivar.com/2/latin```

This will return 2 paragraphs in latin mode
 