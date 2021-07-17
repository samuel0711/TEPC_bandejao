var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Drácula',
   subtitle: 'A miserable little pile of secrets' });
});

module.exports = router;
