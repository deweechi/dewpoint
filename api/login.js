const express = require('express');
const axios = require('axios');
require('dotenv').config({ path: '.env' });



const app = express();
app.use(express.json());

app.get('/', async (req, res) => {
  axios.post('http://localhost:1337/auth/local', {
    identifier: 'test01',
    password: 'password',
  })
  .then(response => {
    // Handle success.
    console.log('Well done!');
    console.log('User profile', response.data.user);
    console.log('User token', response.data.jwt);
    res.send(response.data);
  })
  .catch(error => {
    // Handle error.
    console.log('An error occurred:', error);
  });

});




module.exports = {
  path:"/api/login",
  handler:app
}

