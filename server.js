const gm = require("gm")
const request = require("request")
const express = require("express")

const port = process.env["PORT"] || 3000

const app = express()

function convertImage(inputStream) {
  return gm(inputStream)
    .resize(600, 336)
    .composite("watermark.png")
    .geometry("+30+30")
    .stream()
}

app.get("/:url", function (req, res) {
  const url = decodeURIComponent(req.params.url)
  res.set("Content-Type", "image/png")
  convertImage(request.get(url)).pipe(res)
})

app.listen(port, function () {
  console.log(`Node Watermark listening on port ${port}!`)
})
