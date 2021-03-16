var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/yolo', function(req, res, next) {
  res.send('respond lol');
});

module.exports = router;
