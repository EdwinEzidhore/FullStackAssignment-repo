const express = require('express')
const app = express();
const cardRoute = require('./Routes/cards');
const cors = require('cors');
const bodyParser = require('body-parser');
const ErrorHandler = require('./Middleware/ErrorHandler');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())


app.use('/', cardRoute);
app.use(ErrorHandler);

module.exports = app;