const mongoose = require("mongoose")
const haunted_placeSchema = mongoose.Schema({
address: String,
year: Number,
description: String
})
module.exports = mongoose.model("Haunted_places", haunted_placeSchema)