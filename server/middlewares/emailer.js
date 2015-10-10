var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'habittrainersummary@gmail.com',
    password: 'habittrainerpassword'
  }
});

var mailOptions = {
  from: '"Habit Trainer" <habittrainersummary@gmail.com>',
  to: user,
  subject: 'Weekly Habits Summary',
  text: 'This is a reminder to complete your habits.',
  html: '<b>This is a reminder to complete your habits.</b>'
};

module.exports.sendSummaryEmail = function(user) {
  transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
      return console.log(error);
    }
    console.log('Summary email sent: ' + info.response);
  });
};
