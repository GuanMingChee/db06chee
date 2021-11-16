//var Costume = require('../models/costume');

var Haunted_places = require("../models/haunted_places");
// List of all Costumes
/**
exports.haunted_places_list = function(req, res) {
res.send('NOT IMPLEMENTED: List of haunted places');
};
*/
exports.haunted_places_list = async function(req, res) {
    try{
    theHaunted_places = await Haunted_places.find();
    res.send(theHaunted_places);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
};
// VIEWS
// Handle a show all view 
exports.haunted_places_view_all_Page = async function(req, res) {
    try{
        theHaunted_places = await Haunted_places.find();
        res.render('hauntedplaces', { title: 'Haunted places Search Results', results: theHaunted_places });
        }
        catch(err){
        res.status(500);
        res.send(`{"error": ${err}}`);
        }
        };
// for a specific Costume.
/**
exports.haunted_places_detail = function(req, res) {
res.send('NOT IMPLEMENTED: Detail of haunted places: ' + req.params.id);
};
*/
// for a specific Costume.
exports.haunted_places_detail = async function(req, res) {
    console.log("detail" + req.params.id)
    try {
        result = await Haunted_places.findById( req.params.id)
        res.send(result)
    } catch (error) {
        res.status(500)
        res.send(`{"error": document for id ${req.params.id} not found`);
    }
    };
// Handle Costume create on POST.
/**
exports.haunted_places_create_post = function(req, res) {
res.send('NOT IMPLEMENTED: Haunted places create POST');
};
*/
// Handle Costume create on POST. 

exports.haunted_places_create_post = async function(req, res) {
    console.log(req.body)
    let document = new Haunted_places();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"costume_type":"goat", "cost":12, "size":"large"} 
    document.address = req.body.address; 
    document.year = req.body.year; 
    document.description = req.body.description;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
};

// Handle Costume delete form on DELETE.
exports.haunted_places_delete = function(req, res) {
res.send('NOT IMPLEMENTED: Haunted places delete DELETE ' + req.params.id);
};
// Handle Costume delete on DELETE.
exports.haunted_places_delete = async function(req, res) {
    console.log("delete " + req.params.id)
    try {
    result = await Haunted_places.findByIdAndDelete( req.params.id)
    console.log("Removed " + result)
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": Error deleting ${err}}`);
    }
};
// Handle Costume update form on PUT.
/**
exports.haunted_places_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: Haunted places update PUT' + req.params.id);
};
*/
// Handle Costume update form on PUT.
exports.haunted_places_update_put = async function(req, res) {
    console.log(`update on id ${req.params.id} with body ${JSON.stringify(req.body)}`)
    try {
        let toUpdate = await Haunted_places.findById( req.params.id)
// Do updates of properties
        if(req.body.address) toUpdate.address = req.body.address;
        if(req.body.year) toUpdate.year = req.body.year;
        if(req.body.description) toUpdate.description = req.body.description;
        let result = await toUpdate.save();
        console.log("Sucess " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": ${err}: Update for id ${req.params.id} failed`);
    }
};
