"use strict";

// imports
require('dotenv').config();

var express = require('express');

var cors = require('cors');

var session = require('express-session');

var morgan = require('morgan');

var auth = require('./routes/auth');

var team = require('./routes/team');

var pokemon = require('./routes/pokemon');

var passport = require('./passport');

var util = require('util');

var port = process.env.PORT || 4000;
var app = express(); // middleware - server logging

app.use(morgan('dev')); // middleware - JSON parsing

app.use(express.json()); // middleware - cors

var corsOptions = {
  // from which URLs do we want to accept requests
  origin: ['http://localhost:3000'],
  credentials: true,
  // allow the session cookie to be sent to and from the client
  optionsSuccessStatus: 204
};
app.use(cors(corsOptions)); // middleware - session config

app.use(session({
  // session is stored in the DB
  secret: 'REPLACE_THIS_WITH_A_REAL_SECRET',
  resave: false,
  // will not resave sessions
  saveUninitialized: false,
  // only create a session when a property is added to the session
  cookie: {
    maxAge: 1000 * 60 * 60 * 24
  }
})); // middleware - passport config

app.use(passport.initialize());
app.use(passport.session()); // middleware - API routes

app.use('/api/v1/auth', auth);
app.use('/api/v1/team', team);
app.use('/api/v1/pokemon', pokemon); // connection

app.listen(port, function () {
  return console.log("Server is running on port ".concat(port));
});