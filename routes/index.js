var express = require('express');
var router = express.Router();

/* GET home page. */
router.get(['/', '/index'], function(req, res, next) {
  res.render('index', {
    title: 'Moosichu.com'
  });
});

router.get('/about', function(req, res, next) {
  res.render('about', {
    title: 'Moosichu.com'
  });
});

router.get('/blog', function(req, res, next) {
  res.render('blog', {
    title: 'Moosichu.com'
  });
});

module.exports = router;
