const mongoose = require("mongoose")
const haunted_placeSchema = mongoose.Schema({
address: {
    type: String,
},
year: {
    type: Number,
    min: [10, "bigger number"]
},
description: String
})
module.exports = mongoose.model("Haunted_places", haunted_placeSchema)
