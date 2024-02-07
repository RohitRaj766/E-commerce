const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    username : {
        type:String,
        unique:true,
        required:true,
    },
    email: {
        type: String,
        unique: true,
        required: true,
    },
    password:{
        type:String,
        require:true,
    },
    isAdmin:{
        type:Boolean,
        default:false,
    },
},{timestamps:true});
module.exports = mongoose.model('Users.js',userSchema);