const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const app = express();


app.get('/',(req, res)=>{
    res.send("hello E-commerce")
});

const uri = process.env.MongooseUri;
mongoose.connect(uri).then(()=>{
    console.log("db connected")
}).catch((e)=>{
    console.log(e);
})


const PORT = process.env.PORT || 5001;
app.listen(PORT,()=>{
    console.log(`servert is running at port ${PORT}`)
});