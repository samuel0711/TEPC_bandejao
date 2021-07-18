var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Bandejando',
   subtitle: 'Sistema para alocação de pessoas no bandejão da UFRRJ-IM' });
});

module.exports = router;
