const mongoose = require('mongoose');


const showKittySchema = () =>{
    const kittySchema = new mongoose.Schema({
        name: String
    });

    const Kitten = mongoose.model('Kitten',kittySchema);

    const Mitzi = new Kitten({name:"Katie"})
    Mitzi.save();
    const Fluffy = new Kitten({name: "Fluffy"})
    Fluffy.save();
    return {kittySchema,Kitten,Fluffy,Mitzi}
}


module.exports = showKittySchema();