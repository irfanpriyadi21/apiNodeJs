const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const routes = require('./routes/routes');

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(express.json());
app.use("/", routes);

module.exports = app;
