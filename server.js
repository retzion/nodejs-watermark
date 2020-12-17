const express = require("express")
const watermark = require("node-image-watermark")

const app = express()
const port = process.env["PORT"] || 3000

app.get("/sample", function (req, res) {
  res.set("Content-Type", "image/png")
  watermark({
    imageUrl: "https://picsum.photos/900/600",
    watermarkPath: "./watermark.png",
  }).pipe(res)
})

app.get("/u/:imageUrl", function (req, res) {
  const { imageUrl } = req.params
  if (!imageUrl) res.sendStatus(404)

  res.set("Content-Type", "image/png")
  watermark({
    watermarkPath: "./watermark.png",
    ...req.query,
    ...req.params,
  }).pipe(res)
})

app.listen(port, () => {
  console.log(`Node Image Watermark listening on port ${port}!`)
})
