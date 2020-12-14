if (process.env.NODE_ENV !== "production") require("dotenv").config()

const gm = require("gm")
const request = require("request")
const express = require("express")

const port = process.env["PORT"] || 3000

const app = express()

function convertImage(inputStream) {
  return gm(inputStream)
    .resize(600, 336)
    .composite("watermark.png")
    .geometry("+60+60")
    .stream()
}

app.get("/r/:photoReference", function (req, res) {
  const url = `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1200&photoreference=${req.params.photoReference}&key=${process.env["GOOGLE_PLACES_API_KEY"]}`
  res.set("Content-Type", "image/png")
  convertImage(request.get(url)).pipe(res)
})

app.get("/u/:url", function (req, res) {
  const url = decodeURIComponent(req.params.url)
  res.set("Content-Type", "image/png")
  convertImage(request.get(url)).pipe(res)
})

app.listen(port, function () {
  console.log(`ImageOptimizer listening on port ${port}!`)
})
