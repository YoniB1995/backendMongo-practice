const express = require('express')
const router = express.Router();

router.get('/yoni',(req,res)=>{
    res.send("<h2>This is yoni page</h2>")
})


router.get('/yoav',(req,res)=>{
    res.send("<h2>This is yoav page</h2>")
})

module.exports=router;