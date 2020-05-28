const express = require('express')
const axios = require('axios')
require('dotenv').config({ path: '.env' })

const USER = process.env.USER_URL

const app = express()
app.use(express.json())
app.get('/', async (req, res, callback) => {

  let token = (req.body && req.body.access_token) || (req.query && req.query.access_token) || req.headers['authorization']
    let config = {
    headers: {
       Authorization: token
    }
 }
   axios.get(USER, config)
  .then(response => {
    res.send(response.data);
  })
  .catch(error => {
    callback(error)
  })

})


module.exports = {
  path:"/api/user",
  handler:app
}

