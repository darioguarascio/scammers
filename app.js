require('dotenv').config();

const moment = require('moment');
moment.locale('it');

const axios = require('axios');
const mcache = require('memory-cache');
const express = require('express')
const winston = require('winston');
const expressWinston = require('express-winston');
const twig = require('twig');
const app = express()

// let momentDate = moment('2022.01.01-11.11', 'YYYY.MM.DD-HH.mm');
// console.log(momentDate.fromNow())

app.set("twig options", {
    allow_async: true, // Allow asynchronous compiling
    strict_variables: false
});

app.use(expressWinston.logger({
  transports: [
    new winston.transports.Console()
  ],
  format: winston.format.combine(
    winston.format.colorize(),
    winston.format.simple()
  ),
  meta: false, // optional: control whether you want to log the meta data about the request (default to true)
  msg: "HTTP {{req.method}} {{req.url}}", // optional: customize the default logging message. E.g. "{{res.statusCode}} {{req.method}} {{res.responseTime}}ms {{req.url}}"
  expressFormat: true, // Use the default Express/morgan request formatting. Enabling this will override any msg if true. Will only output colors with colorize set to true
  colorize: true, // Color the text and status code, using the Express/morgan color palette (text: gray, status: default green, 3XX cyan, 4XX yellow, 5XX red).
  ignoreRoute: function (req, res) { return false; } // optional: allows to skip some log messages based on request and/or response
}));


app.get('/', (req, res, next) => {
  res.render('index.twig', {
    // message : "Hello World"
  });
});


app.use(express.static('public'));


app.use(function(req, res, next) {
  res.status(404);
  res.type('txt').send('Not found');
});

app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).send('Something broke!')
})

const PORT = process.env.PORT || 3000;


app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})
