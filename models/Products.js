const mongoose =  require("mongoose");

const ProductSchema = (
{
title:{type:String, require:true, unique:true},
desc:{type:String, require:true},
img:{type:String, require:true},
categories:{type: Array},
size:{type:String},
color:{type:String},
color:{type:Number,require:true},
},{timestamps:true}
);

module.exports = mongoose.model("Products.js",ProductSchema);