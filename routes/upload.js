var express = require('express');
var http = require('http');
var storage = require('./storage');
var router = express.Router();

/* POST a shopping list */
router.post('/', function(req, res, next) {
  const listItem = req.body;
  const url = 'http://geocode.xyz/?scantext=' + encodeURI(req.body.address) + '&geoit=JSON&region=DE';
  console.log(url);
  http.get(url, (httpresult) => {
    var body = '';

    httpresult.on('data', function(chunk){
        body += chunk;
    });

    httpresult.on('end', function(){
        var result = JSON.parse(body);

        if (result.match && result.match.length) {
          listItem.latlng = [parseFloat(result.match[0].latt), parseFloat(result.match[0].longt)]
        } else {
          listItem.latlng = ["48.1", "11.5"];
        }

        storage.push(listItem);
        res.json("OK");
    });
  });
});

module.exports = router;
