const providers = require('../models/providers');

// FOR LIST
module.exports.list = function(req, res){
    res.render('providers/provider-list', { title : 'Providers', providers : providers})
}

// DETAILS 
module.exports.details = function(req, res){
    let id = req.params.id;
    let provider = providers.find( provider => provider.id == id) // lookup provider by ID
    res.render('providers/provider-detail', { id : id, title : 'Providers', company : provider.company})
}

// EDIT PAGE
module.exports.edit = function(req, res){
    let id = req.params.id;
    let provider = providers.find( provider => provider.id == id)
    res.render('providers/provider-edit', { id : id, title : 'Edit Provider', provider : provider})
}

// UPDATE Form
module.exports.update = function(req, res){
    let id = req.params.id;
    let provider = providers.find( provider => provider.id == id)
    provider.firstname = req.body.firstname;
    provider.lastname = req.body.lastname;
    provider.position = req.body.position;
    provider.company.company_name = req.body.company_name;
    provider.company.address = req.body.address;
    provider.company.address2 = req.body.address2;
    provider.company.city = req.body.city;
    provider.company.postal_code = req.body.postal_code;
    provider.company.email = req.body.email;
    provider.company.phone = req.body.phone;
    provider.company.description = req.body.description;
    provider.company.tagline = req.body.tagline;
    res.render('providers/provider-update', { title : 'Update'})
}

// ADD FORM
module.exports.addform = function(req, res){
    res.render('providers/provider-add-form', { title : 'Add Provider'})
}

// ADD PROVIDER
module.exports.add = function(req, res){
    let min = 100000;
    let max = 999999;
    let id = Math.floor(Math.random() * (max-min)+min); // create a random ID

    let provider = {
        id: id,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        position: req.body.position,
        company: {
            company_name: req.body.company_name,
            address: req.body.address,
            address2: req.body.address2,
            city: req.body.city,
            postal_code: req.body.postal_code,
            email: req.body.email,
            phone: req.body.phone,
            description: req.body.description,
            tagline: req.body.tagline
        }
    }
    providers.push(provider);   // add to list
    res.render('providers/provider-add', { title : 'Added'})
}

// DELETE PROVIDER
module.exports.delete = function(req, res){
    let id = req.params.id;
    let provider = providers.find( provider => provider.id == id)
    let company = provider.company.company_name;

    let idx = providers.indexOf(providers.find( provider => provider.id == id));     // find index
    providers.splice(idx,1);   // remove from list

    res.render('providers/provider-delete', { title : 'Deleted', company : company })

}
