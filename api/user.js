const express = require('express');
const axios = require('axios');
require('dotenv').config({ path: '.env' });
var jwt = require('jwt-simple');



const app = express();
app.use(express.json());
//identifier: 'test01',
    //password: 'password',
app.post('/', async (req, res) => {

console.log(req)
  var token = (req.body && req.body.access_token) || (req.query && req.query.access_token) || req.headers['authorization'];
  console.log('In the user.js file',token)

  if (token) {
    try {
      var decoded = jwt.decode(token, app.get('jwt'));

      console.log(decoded)

    } catch (error) {

    }
  } else {

  }
})
//console.log('FROM USER:', ...req.headers.authorization);



/*   axios.post('http://localhost:1337/users/me',{
...req.headers.authorization
  })
  .then(response => {
    // Handle success.
   // console.log('Well done!');
    //console.log('User FROM USERJS', response.data.user);
  //  console.log('User token', response.data.jwt);
    res.send(response.data);
  })
  .catch(error => {
    // Handle error.
    console.log('An error occurred:', error);
  });

}); */


module.exports = {
  path:"/api/user",
  handler:app
}

