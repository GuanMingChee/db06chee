var express = require('express');
var router = express.Router();

/* GET home page. */
/**
router.get('/', function(req, res, next) {
  res.render('hauntedplaces', { title: 'Search Results Haunted Places' });
});
module.exports = router;
*/
var express = require('express'); 
const haunted_places_controllers= require('../controllers/hauntedplacescollection');
var router = express.Router();
/* GET costumes */ 
router.get('/', haunted_places_controllers.haunted_places_view_all_Page );
module.exports = router;

