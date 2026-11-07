
var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('gardens', {
    title: 'Search Results - Gardens'
  });
});

module.exports = router;
