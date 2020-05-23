const express = require('express');
const axios = require('axios');
require('dotenv').config({ path: '.env' });
var jwt = require('jwt-simple');



const app = express();
app.use(express.json());
app.get('/', async (req, res) => {

  let token = (req.body && req.body.access_token) || (req.query && req.query.access_token) || req.headers['authorization'];
    let config = {
    headers: {
       Authorization: token
    }
 }
/

   axios.get('http://localhost:1337/users/me', config)
  .then(response => {

    res.send(response.data);
  })
  .catch(error => {
    // Handle error.
    console.log('An error occurred:', error);
  });

});


module.exports = {
  path:"/api/user",
  handler:app
}

