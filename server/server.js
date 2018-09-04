
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');

const messagesCtrl = require('./messagesCtrl');

const app = express();


// destructuring from process.env:
let { SERVER_PORT } = process.env;


// Middleware:
app.use(bodyParser.json());
app.use(session({
 secret: '34greveg45r329ijofopfewEJW()#JDWJ#_P{KWEIHKEW_#)OP_)',
 resave: false,
 saveUninitialized: true
}));


// EndPoints:
// get/ read
app.get('/api/messages', messagesCtrl.getAllMessages);
// create
app.post('/api/messages', messagesCtrl.createMessage);


// listen 
app.listen(SERVER_PORT, () => {
 console.log(`Listening on port: ${SERVER_PORT}`);
});
