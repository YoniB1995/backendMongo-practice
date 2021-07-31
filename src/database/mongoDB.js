const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/test',
{
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology:true,
})