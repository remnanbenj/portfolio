var express = require('express');
var router = express.Router();

/* GET portfolio page. */
router.get('/', function(req, res, next) {
  res.render('portfolio', { title: 'Ben Remnant Development' });
});

router.get('/berd', function(req, res, next) {
  res.render('portfolio/berd', { title: 'Ben Remnant Development' });
});

router.get('/dinz', function(req, res, next) {
  res.render('portfolio/dinz', { title: 'Ben Remnant Development' });
});

router.get('/zenergy', function(req, res, next) {
  res.render('portfolio/zenergy', { title: 'Ben Remnant Development' });
});

router.get('/plastic', function(req, res, next) {
  res.render('portfolio/plastic', { title: 'Ben Remnant Development' });
});

router.get('/aah', function(req, res, next) {
  res.render('portfolio/aah', { title: 'Ben Remnant Development' });
});

module.exports = router;
