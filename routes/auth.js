const router = require('express').Router();
const User = require("../models/Users");
const CryptoJS = require("crypto-js");
const dotenv = require("dotenv");
dotenv.config();

router.post('/register',async (req,res)=>{
    const newUser = new User({
        username:req.body.username,
        email:req.body.email,
        password:CryptoJS.AES.encrypt(
            req.body.password,
            process.env.PASS_SEC
        ).toString(),
    })
    try{
        const savedUser = await newUser.save();
        res.status(201).json(savedUser)
        console.log("savedUser");
    }catch(err){
        res.status(500).json(err)
    }
});

//Login

router.post('/login', async (req,res)=>{
        try{
            const user = await User.findOne({username:req.body.username});
            !user && res.status(401).json("wrong credentials!");
            const hashedPassword = CryptoJS.AES.decrypt(
                user.password,
                process.env.PASS_SEC
            );
            const originalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);
            originalPassword !== req.body.password&& res.status(401).json("worng credential!");
            const {password, ...others} = user._doc;
            
            res.status(200).json(others);

        }catch(err){
            res.status(500).json(err)
        }
});


module.exports = router;