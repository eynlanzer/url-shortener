// import express from 'express'
const express = require('express')
const mongoose = require('mongoose')
const ShortURL = require('./models/shortURL')
// import './config/database'
const app = express()
const port = process.env.PORT || 3001

mongoose.connect('mongodb://admin:9RTCCV9iHesJQOPC@cluster0-shard-00-00.m0wrl.mongodb.net:27017,cluster0-shard-00-01.m0wrl.mongodb.net:27017,cluster0-shard-00-02.m0wrl.mongodb.net:27017/url-shortener?ssl=true&replicaSet=atlas-cyr16x-shard-0&authSource=admin&retryWrites=true&w=majority', {
  useNewUrlParser: true, useUnifiedTopology: true
})

app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: false }))

app.get('/', async (req, res) => {
  const shortURLs = await ShortURL.find()
  res.render('index', { shortURLs: shortURLs })
})

app.post('/shortURLs', async (req, res) => {
  await ShortURL.create({ full: req.body.fullURL })

  res.redirect('/')
})

app.get('/:shortURL', async (req, res) => {
  const shortURL = await ShortURL.findOne({ short: req.params.shortURL })
  if (shortURL == null) return res.sendStatus(404)

  shortURL.clicks++
  shortURL.save() // update clicks value

  res.redirect(shortURL.full)
})

app.listen(port, () => {
  const date = new Date()
  console.log(`${date} - Server is running on port: ${port}`)
})