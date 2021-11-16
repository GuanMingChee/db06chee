var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var haunted_places_controller = require('../controllers/hauntedplacescollection');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// COSTUME ROUTES ///
// POST request for creating a Costume.
router.post('/haunted_places', haunted_places_controller.haunted_places_create_post);
// DELETE request to delete Costume.
router.delete('/haunted_places/:id', haunted_places_controller.haunted_places_delete);
// PUT request to update Costume.
router.put('/haunted_places/:id', haunted_places_controller.haunted_places_update_put);
// GET request for one Costume.
router.get('/haunted_places/:id', haunted_places_controller.haunted_places_detail);
// GET request for list of all Costume items.
router.get('/haunted_places', haunted_places_controller.haunted_places_list);
router.get('/detail', haunted_places_controller.haunted_places_view_one_Page);
module.exports = router;
