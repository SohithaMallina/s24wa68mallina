var express = require('express');
var router = express.Router();
let value = 0;
let total = 1;

/* GET users listing. */
router.get('/', function (req, res, next) {
  value += 2;
  total += value;
  res.send(`Total is: ${total}`);
  res.send('respond with a resource');
});

module.exports = router;
