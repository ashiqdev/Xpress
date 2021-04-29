const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const configureRoutes = require('./controllers');
const { NotFound } = require('./utils/errors');
const { handleErrors } = require('./middlewares/handle-errors');

const app = express();

require('dotenv').config();

// set up cors to handle request from frontend
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// view clean http request in console.
app.use(morgan('dev'));

configureRoutes(app);

// not found error handler [this middleware handles the not found routes]
const notFound = () => {
  throw new NotFound('Not Found');
};

app.use(notFound);

app.use(handleErrors);

module.exports = app;
