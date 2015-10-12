// modules =================================================
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var errorHandler = require('express-error-handler');
var morgan = require('morgan');
var mongoose = require('mongoose');
var passport = require('passport');
var JwtStrategy = require('passport-jwt').Strategy;
var config = require('./config/config');
var strategies = require('./config/strategies');

var emailer = require('./middlewares/emailer.js');
var google = require('./models/googleUser.js');

// configuration ===========================================
app.set('port', process.env.PORT || config.port);

var dbURI = process.env.MONGOLAB_URI || config.localdb;
mongoose.connect(dbURI);
var db = mongoose.connection;

db.on('error', function(err) {
  console.error('Mongoose connection error, retrying in 5 seconds.');
  setTimeout(function() {
    mongoose.connect(dbURI);
  }, 5000);
});
db.on('connected', function() {
  console.log('Mongoose connection open to ' + dbURI);
});
db.on('disconnected', function() {
  console.log('Mongoose connection disconnected.');
});

passport.use(new JwtStrategy(strategies.jwtOpts, strategies.jwtAuth));

// middlewares =============================================
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/../client'));

// routes ==================================================
require('./middlewares/router')(app, express);

app.use(errorHandler({server: app}));

// right now the emailer is set to check for sunday; change it to monday tomorrow
// sort of a hacky way to do this - should instead use a scheduler/CRON worker
setInterval(emailer, 60000);
// emailer('steinert.donald@gmail.com');

// to drop the google db
// google.remove({}, function(){
//   console.log('collection removed');
// });

module.exports = app;
