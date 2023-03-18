const mongoose = require('mongoose');
const {providerSchema} = require('../schemas/provider.schema');

// create provider mode - makes all CRUD commands available to provider object
const Provider = mongoose.model('Providers', providerSchema);

module.exports = { Provider }

// goes to db.js where it has to be required