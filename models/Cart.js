const mongoose =  require("mongoose");
const CartSchema = (
{
userId:{type:String, require:true, unique:true},
products:[
    {
            productId:{
                type:String,
            },
            quntity:{
                type:Number,
                default:1,
            },
    }
],
},{timestamps:true}
);
module.exports = mongoose.model("Cart.js",CartSchema);