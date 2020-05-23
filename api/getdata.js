const express = require('express');
const axios = require('axios');
require('dotenv').config({ path: '.env' });

const HOMEPAGE = process.env.HOMEPAGE;

const app = express();
app.use(express.json());

app.get('/', async (req, res) => {
  axios.get(HOMEPAGE)
  .then(function (response) {
    res.send(response.data)
  })
  .catch(function (error) {
    res.status(404).send('Not Found')

  });


});




module.exports = {
  path:"/api/gethome",
  handler:app
}

