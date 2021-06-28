// import express from 'express'
const express = require('express')
const app = express()
const port = process.env.PORT || 3001

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  res.render('index')
})

app.listen(port, () => {
  const date = new Date()
  console.log(`${date} - Server is running on port: ${port}`)
})