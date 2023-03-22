var providers = require('../models/providers.models');
const Provider = require('../db/db');
const { ObjectId } = require('mongodb');

// UTIL FUNCTIONS
// check if list is empty
function isEmptyList(obj) {
    return (!obj || obj.length == 0 || Object.keys(obj).length == 0);
}

// function existsProvider(id){
//     return providers.find(provider => provider.id ==id);
// }

// function getUniqueId(providers){
//     let min = 100000;
//     let max = 999999;
//     do 
//     var id = Math.floor(Math.random() * (max-min)+min); // create a random ID
//     while (existsProvider(id))
//     return id;
// }

// CRUD     Post, Get, Put, Delete

// POST     
module.exports.create = function (req, res) {
    if (isEmptyList(providers)) {
        providers = [];
    }

    var id = req.body.id;
    if (existsProvider(id)) {
        id = getUniqueId();
    }

    var provider = req.body;    // the body of the request already has the object in proper format
    provider.id = id;

    providers.push(provider);   // add to list
    res.status(200);
    res.send(provider);
}


// handle error
function handleError(res, error) {
    res.status(200);
    res.send("Something went wrong. \n" + error);
}


// GET ALL  /api/providers
module.exports.readAll = function (req, res) {

    try {
        Provider.find({})
            .then(result => {
                if (isEmptyList(result)) {
                    res.status(400);
                    res.send('List is empty.')
                }
                res.status(200);
                res.send(result);
            })
            .catch(error => handleError(res, error))
    }
    catch (error) {
        handleError(res, error)
    }

}

// GET One  /api/providers/id
module.exports.readOne = function (req, res) {

    try {
        let id = new ObjectId(req.params.id);

        Provider.find({ '_id': id })
            .then(result => {
                if (isEmptyList(result)) {
                    res.status(400);
                    res.send('List is empty.')
                }

                res.status(200);
                res.send(result);
            })
            .catch(error => handleError(res, error))
    }
    catch (error) {
        handleError(res, error)
    }
}

// PUT Update   //api/providers/id
module.exports.update = function (req, res) {
    if (isEmptyList(providers)) {
        res.status(404);
        res.send('List is empty. Cannot Update')
    }
    let id = req.params.id;
    let provider = providers.find(provider => provider.id == id)
    provider.firstname = req.body.firstname;
    provider.lastname = req.body.lastname;
    provider.position = req.body.position;
    provider.company.company_name = req.body.company.company_name;
    provider.company.address = req.body.company.address;
    provider.company.address2 = req.body.company.address2;
    provider.company.city = req.body.company.city;
    provider.company.postal_code = req.body.company.postal_code;
    provider.company.email = req.body.company.email;
    provider.company.phone = req.body.company.phone;
    provider.company.description = req.body.company.description;
    provider.company.tagline = req.body.company.tagline;
    res.status(200);
    res.send(provider);
}

// DELETE   //api/providers/id
module.exports.deleteOne = function (req, res) {
    if (isEmptyList(providers)) {
        res.status(404);
        res.send('List is empty. Cannot Delete')
    }
    let id = req.params.id;
    let provider = providers.find(provider => provider.id == id)

    let idx = providers.indexOf(provider);     // find index
    providers.splice(idx, 1);   // remove from list

    res.status(200);
    res.send(provider);
}

// DELETE ALL
module.exports.deleteAll = function (req, res) {
    providers = [];
    res.status(200);
    res.send("Deleted All Providers");
}