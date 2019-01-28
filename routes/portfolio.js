var express = require('express');
var router = express.Router();

/* GET portfolio page. */
router.get('/', function(req, res, next) {
  res.render('portfolio', { title: 'Portfolio' });
});

router.get('/berd', function(req, res, next) {
  res.render('portfolio/berd', { title: 'Portfolio' });
});

router.get('/dinz', function(req, res, next) {
  res.render('portfolio/dinz', { title: 'Portfolio' });
});

router.get('/zenergy', function(req, res, next) {
  res.render('portfolio/zenergy', { title: 'Portfolio' });
});

router.get('/plastic', function(req, res, next) {
  res.render('portfolio/plastic', { title: 'Portfolio' });
});

router.get('/aah', function(req, res, next) {
  res.render('portfolio/aah', { title: 'Portfolio' });
});

module.exports = router;
