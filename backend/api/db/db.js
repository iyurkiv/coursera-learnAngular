const mongoose = require('mongoose');
const {Provider} = require('../models/provider');

// connection string
const uri = 'mongodb://127.0.0.1:27017/provider_db';

// make db connection
mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(result => {
        console.log("successfull connection to mongoose")
    })
    .catch(error=> console.log(error));





module.exports = Provider;