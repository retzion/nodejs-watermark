# nodejs-watermark
[![npm version](https://badge.fury.io/js/nodejs-watermark.svg)](https://badge.fury.io/js/nodejs-watermark)
[![Issues](https://img.shields.io/github/issues/retzion/nodejs-watermark)](https://github.com/retzion/nodejs-watermark/issues)
![Forks](https://img.shields.io/github/forks/retzion/nodejs-watermark)
![Stars](https://img.shields.io/github/stars/retzion/nodejs-watermark)
[![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)

[See the demo](https://node-watermark.herokuapp.com/sample) (<i>[view source](https://github.com/retzion/nodejs-watermark)</i>)

Try it out on your local machine:

1. Install [GraphicsMagick](http://www.graphicsmagick.org/) on your machine (or a buildpack on your server)
2. Clone this repo: `git@github.com:retzion/nodejs-watermark.git`
3. Install dependencies: `npm i`
4. Run it: `npm run start:dev`
5. Try it out: `http://localhost:3000/https%3A%2F%2Fpicsum.photos%2F1200%2F777`
6. Try adding some params: `http://localhost:3000/u/https%3A%2F%2Fpicsum.photos%2F1200%2F777?resize=1200,660&geometry=660,540`

<br /><br />
Params:

Include `geometry` and `resize` as querystring parameters in order to customize the image.

- `resize`: Tuple of X, Y dimensions for resizing the base image (`?resize=800,450`)

- `geometry`: Tuple of X, Y coordinates for where to place the watermark  (`?geometry=30,30`)



<br /><br /><hr />

<i>resources:</i>

Heroku Buildpack: https://elements.heroku.com/buildpacks/xerpa/heroku-buildpack-graphicsmagick