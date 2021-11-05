var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('hauntedplaces', { title: 'Search Results Haunted Places' });
});

module.exports = router;
