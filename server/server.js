
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');

const app = express();


// destructuring from process.env:
let { SERVER_PORT } = process.env;


// Middleware:
app.use(bodyParser.json());


// EndPoints:


// listen 
app.listen(SERVER_PORT, () => {
 console.log(`Listening on port: ${SERVER_PORT}`);
});
