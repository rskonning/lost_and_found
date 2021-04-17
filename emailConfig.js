var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'aulostandfound@gmail.com',
    pass: 'ozvqrxeaxrmmkbgh'
  }
});

mail = function (mailOptions){
  transporter.sendMail(mailOptions, function(error, info){
        if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });
  };

module.exports = {mail};