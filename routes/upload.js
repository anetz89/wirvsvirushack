var express = require('express');
var storage = require('./storage');
var router = express.Router();

/* POST a shopping list */
router.post('/', function(req, res, next) {
  console.log(req.body);
  storage.push(req.body);
  res.json("OK");
});

module.exports = router;