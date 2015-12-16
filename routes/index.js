var express = require('express');
var router = express.Router();

/* GET home page. */
router.get(['/', '/index'], function(req, res, next) {
  res.render('index', {
    title: 'Moosichu.com',
    fs: require('fs')
  });
});

router.get('/about', function(req, res, next) {
  res.render('about', {
    title: 'Moosichu.com',
    fs: require('fs')
  });
});

module.exports = router;
