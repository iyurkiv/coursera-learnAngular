const providers = require('../models/providers');

module.exports.list = function(req, res){
    res.render('providers/provider-list', { title : 'Providers', providers : providers})
}

module.exports.details = function(req, res){
    let id = req.params.id;
    let provider = providers.find( provider => provider.id == id)
    res.render('providers/provider-detail', { id : id, title : 'Providers', company : provider.company})
}