const express = require('express')
const app = express();

app.get('/',(req,res)=>{
    res.send("<h1>This is Home Page</h1>")
})

app.listen(8000,()=>{
    console.log("Logged to localhost:8000")
})