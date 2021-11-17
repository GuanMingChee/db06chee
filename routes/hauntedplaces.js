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
// GET request for one costume.
router.get('/hauntedplaces/:id', haunted_places_controllers.haunted_places_detail);
/* GET detail costume page */
router.get('/detail', haunted_places_controllers.haunted_places_view_one_Page);
/* GET create costume page */
router.get('/create', haunted_places_controllers.haunted_places_create_Page);
/* GET create update page */
router.get('/update', haunted_places_controllers.haunted_places_update_Page);
/* GET create costume page */
router.get('/delete', haunted_places_controllers.haunted_places_delete_Page);
module.exports = router;

