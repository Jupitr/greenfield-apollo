var nodemailer = require('nodemailer');
var moment = require('moment');
var Google = require('../models/googleUser.js');

var transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'habittrainersummary@gmail.com',
    pass: 'habittrainerpassword'
  }
});

var sendSummaryEmail = function(user) {
  transporter.sendMail({
    from: 'habittrainersummary@gmail.com',
    to: user,
    subject: 'Weekly Habits Summary',
    text: 'This is a reminder to complete your habits.',
    html: '<b>This is a reminder to complete your habits.</b>'
  }, function(error) {
    if (error) {
      return console.log(error);
    }
    console.log('Summary email sent');
  });
};

var isTodaySunday = function() {
  return moment().day() === 7;
};

var updateUserEmailStatus = function() {

};

var checkUserEmailStatus = function() {
  if (isTodaySunday) {
    Google.find({}, function(err, results){
      console.log(results);
    })
  }
}

module.exports = checkUserEmailStatus;
