var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('test', { title: 'Express' });
});
router.get('/join', function(req, res, next) {
  res.render('join', { title: 'Express' });
});
router.get('/login', function(req, res, next){
  res.render('login');
});

module.exports = router;
