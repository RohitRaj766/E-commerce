const router = require('express').Router();

router.get('/user1',(req,res)=>{
    console.log("Logged Successfully");
    res.send("hello a");
})

module.exports = router;