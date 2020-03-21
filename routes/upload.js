var express = require('express');
var storage = require('./storage');
var router = express.Router();

/* POST a shopping list */
router.post('/', function(req, res, next) {
  storage.push(req.body);
	res.sendFile('success.html', {root: __dirname });
});

module.exports = router;
