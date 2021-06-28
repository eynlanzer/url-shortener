// import express from 'express'
const express = require('express')
const mongoose = require('mongoose')
const app = express()
const port = process.env.PORT || 3001

mongoose.connect('mongodb://localhost/url-shortener', {
  useNewUrlParser: true, useUnifiedTopology: true
})

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  res.render('index')
})

app.post('/shortURLs', (req, res) => {

})

app.listen(port, () => {
  const date = new Date()
  console.log(`${date} - Server is running on port: ${port}`)
})