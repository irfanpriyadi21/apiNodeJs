// var express = require('express'),
//     app = express(),
//     hostname = '127.0.0.1';
//     port = process.env.PORT || 3000,
//     bodyParser = require('body-parser'),
//     controller = require('./controller/index');

// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());

// app.listen(port, hostname);
// console.log(`Server running at http://${hostname}:${port}/`);

const http = require('http');
const app = require("./app");
const hostname = '127.0.0.1';

const port = process.env.PORT || 3000;

const server = http.createServer(app);
server.listen(port, hostname, ()=>{
    console.log(`Server running at http://${hostname}:${port}/`);
});