const mongoose = require('mongoose')
const kittySchema = require('./schemaDB')

const connectToDB = () => {
return mongoose.connect('mongodb://localhost/yonib',
{
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology:true,
})}

connectToDB().then(()=>
{
    kittySchema;


})