var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('hats', { title: 'Search Results - Hats' });
});

module.exports = router;
