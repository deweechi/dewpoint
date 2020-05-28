const express = require('express')
const axios = require('axios')
require('dotenv').config({ path: '.env' })
const LOGIN = process.env.LOGIN_URL

const app = express()
app.use(express.json())
app.post('/', async (req, res, callback) => {
  axios
    .post(LOGIN, {
      ...req.body
    })
    .then(response => {
      res.send(response.data)
    })
    .catch(error => {
      // Handle error.
      //console.log('An error occurred:', error)
      callback(error)
    })
})

module.exports = {
  path: '/api/login',
  handler: app
}
