var express = require('express');
var storage = require('./storage');
var router = express.Router();

/* POST a shopping list */
router.get('/', function(req, res, next) {
  storage.reset();
  res.json("OK");
});

module.exports = router;
