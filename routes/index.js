var express = require('express');
var router = express.Router();

/* GET bio page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Ben Remnant Development' });
});

/* GET contact page. */
router.get('/contact', function(req, res, next) {
    res.render('contact', { title: 'Contact' });
});

router.post('/sendmessage', function(req, res, next) {
    var name = req.query.name;
    var email = req.query.email;
    var message = req.query.message.split('<br>');
    var msgString = "";
    message.forEach(function(str) {
        msgString += str + '\n';
    });
    var send = require('gmail-send')({
        user: 'dinz.auto@gmail.com',
        pass: 'hzzsawtuotzcgbyz',
        to: 'ben.remnant@gmail.com',
        subject: 'Contact on BERD website from ' + name,
        text: 'From: ' + name + '\n'
        + 'Email: ' + email + '\n\n'
        + 'Message: ' + '\n' + msgString
    })();
    res.send('Message Sent');
});

/* GET contact page. */
router.get('/resume', function(req, res, next) {
  res.render('resume', { title: 'Ben Remnant Resume' });
});

/* GET contact page. */
router.get('/resumeprint', function(req, res, next) {
  res.render('resumeprint', { title: 'Ben Remnant Resume' });
});

module.exports = router;
