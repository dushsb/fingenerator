var express = require('express');
var finnumber = require('./finNumberGenerator');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send(finnumber.getFinNumber());
});

module.exports = router;
