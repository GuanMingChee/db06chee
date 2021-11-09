//var Costume = require('../models/costume');

var Haunted_places = require("../models/haunted_places");
// List of all Costumes
exports.haunted_places_list = function(req, res) {
res.send('NOT IMPLEMENTED: List of haunted places');
};
// for a specific Costume.
exports.haunted_places_detail = function(req, res) {
res.send('NOT IMPLEMENTED: Detail of haunted places: ' + req.params.id);
};
// Handle Costume create on POST.
exports.haunted_places_create_post = function(req, res) {
res.send('NOT IMPLEMENTED: Haunted places create POST');
};
// Handle Costume delete form on DELETE.
exports.haunted_places_delete = function(req, res) {
res.send('NOT IMPLEMENTED: Haunted places delete DELETE ' + req.params.id);
};
// Handle Costume update form on PUT.
exports.haunted_places_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: Haunted places update PUT' + req.params.id);
};
