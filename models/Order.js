const mongoose =  require("mongoose");
const OrderSchema = (
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
amount:{type:Number,required:true},
address:{type:Object, required:true},
status:{type:String, default:"pending"}
},{timestamps:true}
);
module.exports = mongoose.model("Order.js",OrderSchema);