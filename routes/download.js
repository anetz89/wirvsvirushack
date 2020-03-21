var express = require('express');
var storage = require('./storage');
var router = express.Router();

/* GET all shopping list */
router.get('/', function(req, res, next) {
	res.json(storage.get());
});

module.exports = router;
