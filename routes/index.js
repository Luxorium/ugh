const titles = [
  'test 123',
  'test 456',
  'test 789'
]

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: titles[Math.floor(Math.random() * titles.length)] });
});

module.exports = router;
