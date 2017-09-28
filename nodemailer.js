var http = require('http');
var nodemailer = require('C:/Program Files/nodejs/node_modules/npm/node_modules/nodemailer');


var transporter = nodemailer.createTransport(
  {
  service: 'gmail.com',
  auth: {
    user: 'vighneshtiwari16377@gmail.com',
    pass: 'buxarbihar'
  }
});

var mailOptions = {
  from: '<vighneshtiwari16377@gmail.com>',
  to: 'vighnesh.tiwari@yahoo.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
