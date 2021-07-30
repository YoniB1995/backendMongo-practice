const express = require('express')
const app = express();
const router = require('./src/routes/studentRoutes')
const myLogger = require('./src/middlewares/middleware')
const bodyParser = require("body-parser");
app.set('view engine', 'ejs');
app.set('views', __dirname);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(myLogger)

app.use('/family',router)

app.get('/',(req,res)=>{
    res.render('template')
})

app.listen(8000,()=>{
    console.log("Logged to localhost:8000")
})

