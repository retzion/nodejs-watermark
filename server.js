if (process.env.NODE_ENV !== "production") require("dotenv").config()

const gm = require("gm")
const request = require("request")
const express = require("express")

const port = process.env["PORT"] || 3000

const app = express()

const sourceUrl = `https://picsum.photos/id/%PHOTO_ID%/800/450`

function convertImage(inputStream) {
  return gm(inputStream)
    .composite("watermark.png")
    .stream()
}

app.get("/i/:id", function (req, res) {
  const url = sourceUrl.replace("%PHOTO_ID%", req.params.id)
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
