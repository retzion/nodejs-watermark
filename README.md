# nodejs-watermark

[see the demo](https://node-watermark.herokuapp.com/sample)

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

- `resize`: Touple of X, Y dimensions for resizing the base image (`?resize=800,450`)

- `geometry`: Touple of X, Y coordinates for where to place the watermark  (`?geometry=30,30`)



<br /><br /><hr />

<i>resources:</i>

Heroku Buildpack: https://elements.heroku.com/buildpacks/xerpa/heroku-buildpack-graphicsmagick