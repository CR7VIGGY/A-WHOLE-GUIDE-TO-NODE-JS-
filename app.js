var twilio = require('twilio');
var accountSid = 'AC7dd0ed7e66f3cf5be43c7e855be66bc7'; // Your Account SID from www.twilio.com/console
var authToken = 'cf3fe2fe77b0767c776e729786900f98';   // Your Auth Token from www.twilio.com/console

var twilio = require('twilio');
var client = new twilio(accountSid, authToken);

client.messages.create({
    body: 'U R Awesome Vighensh',
    to: '+917507934548',  // Text this number
    from: '+12028497516' // From a valid Twilio number
})
.then((message) => console.log(message.sid));
