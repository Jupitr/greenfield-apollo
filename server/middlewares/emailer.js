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
    html: '<body style=width:600px;font-family:Helvetica"><h1 style="color:#132032;border-bottom:2px solid gray">Habit Trainer</h1><p style="color:#434343;font-size:18px">Don\'t forget to complete you habits this week!</p><p style="color:#434343;font-size:18px">Log on to <a href="https://jupitrlegacy.herokuapp.com">Habit Trainer</a> to track your progress, or check out our new iOS app.</p><img src="https://jupitrlegacy.herokuapp.com/app/assets/mobile.jpg" height="350" width="350"></body>'
  }, function(error) {
    if (error) {
      return console.log(error);
    }
    console.log('Summary email sent');
  });
};

var isTodayMonday = function() {
  // set to sunday for testing
  return moment().day() === 7;
};

var updateUserEmailStatus = function(id) {
  Google.findById(id).then(function(user){
    user.summarySent = true;
    user.save();
    console.log(user);
  });
};

var checkUserEmailStatus = function() {
  if (isTodayMonday) {
    Google.find({}, function(err, results){
      results.forEach(function(user) {
        if (!user.summarySent) {
          sendSummaryEmail(user.email);
          updateUserEmailStatus(user.id);
        }
      });
    })
  }
}

// module.exports = sendSummaryEmail;
module.exports = checkUserEmailStatus;
