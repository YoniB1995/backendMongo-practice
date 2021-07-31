const mongoose = require('mongoose');


const showKittySchema = () =>{
    const kittySchema = new mongoose.Schema({
        name: String
    });

    const Kitten = mongoose.model('Kitten',kittySchema); // Collection

    // Kitten.find((err,data)=>
    //     console.log(data)
    // )

    const data = await Kitten.find().exec().then({name:"Fluffy"}, (err,kittens)=>{
        console.log(kittens)
    }); //- Promise Async Await method with .then

    return {kittySchema,Kitten,data}
}


module.exports = showKittySchema();