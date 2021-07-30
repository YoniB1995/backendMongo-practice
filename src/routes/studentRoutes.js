const express = require('express')
const router = express.Router();
const studentCtrl = require('../controllers/studentCtrl');

router.get('/test',studentCtrl.getStudent)
router.post('/test',studentCtrl.addStudent)
// router.put('/test',studentCtrl.updateStudent)

router.get('/yoni',(req,res)=>{
    res.send("<h2>This is yoni page</h2>")
})


router.get('/:name/:age',(req,res)=>{
    res.send(`<h2>This is ${req.params.name} page</h2>
    <h3>My age is ${req.params.age}</h3>`)
})

module.exports=router;