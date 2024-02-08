const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const app = express();
const userRouter = require('./routes/routes');
const authRouter = require('./routes/auth');


app.use(express.json());
app.use('/api/auth', authRouter);
app.use('/api/users',userRouter);

const uri = process.env.MongooseUri;
if (!uri) {
    console.error("MongooseUri environment variable is not defined.");
    process.exit(1);
}
mongoose.connect(uri).then(()=>{
    console.log("db connected")
}).catch((e)=>{
    console.log(e);
})
const PORT = process.env.PORT || 5001;
app.listen(PORT,()=>{
    console.log(`servert is running at port ${PORT}`)
});