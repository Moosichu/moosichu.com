var express = require('express');
var router = express.Router();

/* GET home page. */
router.get(['/', '/index'], function(req, res, next) {
  res.render('toybox/index', {
    title: 'Moosichu.com'
  });
});

router.get('/raytracer', function(req, res, next) {
  res.render('toybox/raytracer', {
    title: 'Moosichu.com'
  });
});

module.exports = router;
