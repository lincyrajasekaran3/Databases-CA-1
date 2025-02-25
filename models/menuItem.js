const mongoose = require("mongoose");

const menuItemSchema = new mongoose.Schema({
    dish:{type:String, required:true},
    cost:{type:Number, required:true},
});

module.exports= mongoose.model("menuItem", menuItemSchema);