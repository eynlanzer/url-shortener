// import express from 'express'
const express = require('express')
const app = express()
const port = process.env.PORT || 3001

app.listen(port, () => {
  const date = new Date()
  console.log(`${date} - Server is running on port: ${port}`)
})