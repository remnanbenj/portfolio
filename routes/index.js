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

/* GET contact page. */
router.get('/resume', function(req, res, next) {
  res.render('resume', { title: 'Ben Remnant Resume' });
});

/* GET contact page. */
router.get('/resumeprint', function(req, res, next) {
  res.render('resumeprint', { title: 'Ben Remnant Resume' });
});

module.exports = router;
