const mongoose = require("mongoose");

const restaurantSchema = new mongoose.Schema({
    name:{type:String, required:true},
    location:{type:String, required:true},
    menuItems:[{type:mongoose.Schema.Types.ObjectId, ref:"menuItem"}],
});

module.exports = mongoose.model("Restaurant", restaurantSchema);