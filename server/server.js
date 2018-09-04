
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');

const messagesCtrl = require('./messagesCtrl');

const app = express();


// destructuring from process.env:
let { SERVER_PORT } = process.env;


// Middleware:
app.use(bodyParser.json());


// EndPoints:
// get/ read
app.get('/api/messages', messagesCtrl.getAllMessages);
// create
app.post('/api/messages', messagesCtrl.createMessage);


// listen 
app.listen(SERVER_PORT, () => {
 console.log(`Listening on port: ${SERVER_PORT}`);
});
