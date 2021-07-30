const express = require('express')
const app = express();
const router = require('./src/routes/studentRoutes')
const myLogger = require('./src/middlewares/middleware')
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(myLogger)

app.use('/family',router)

app.get('/',(req,res)=>{
    res.send("<h1>This is Home Page</h1>")
})

app.listen(8000,()=>{
    console.log("Logged to localhost:8000")
})

