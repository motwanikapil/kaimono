require('dotenv').config()
const { connectDb } = require('./utils/db')
const express = require('express')
const app = express()

const { PORT, DOMAIN } = process.env

app.use(express.json())

connectDb()
  .then((res) => {
    console.log('Database connected successfully')
    app.listen(PORT, () => {
      console.log(`Server listening on http://${DOMAIN}:${PORT}`)
    })
  })
  .catch((err) => console.log(err))
