var providers = require('../models/providers.models');
const Provider = require('../db/db');
const { ObjectId } = require('mongodb');

// UTIL FUNCTIONS
// check if list is empty
function isEmptyList(obj) {
    return (!obj || obj.length == 0 || Object.keys(obj).length == 0);
}


// handle error
function handleError(res, error) {
    res.status(200);
    res.send("Something went wrong. \n" + error);
}


// CRUD     Post, Get, Put, Delete

// POST     
module.exports.create = function (req, res) {
    try {
        var provider = req.body;    // the body of the request already has the object in proper format
        Provider.create(provider)
            .then(result => {
                res.status(201);
                res.send(result);
            })
            .catch(error => handleError(res, error));
    }
    catch (error) {
        handleError(res, error)
    }
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
        let id = new (req.params.id);

        Provider.find({ 'id': id })
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
    try {
        let id = (req.params.id);
        let provider = req.body;

        Provider.findOneAndUpdate({ 'id': id }, provider, { new: true })
            .then(result => {
                if (isEmptyList(result)) {
                    res.status(400);
                    res.send('List is empty. Cannot Update')
                }
            })
            .catch(error => handleError(error))

    }
    catch (error) {
        handleError(res, error)
    }
}

// DELETE   //api/providers/id
module.exports.deleteOne = function (req, res) {
    try {
        let id = (req.params.id);

        Provider.findOneAndDelete({ 'id': id })
            .then(result => {
                if (isEmptyList(result)) {
                    res.status(404);
                    res.send('List is empty. Cannot Delete')
                }
            })
            .catch(error => handleError(res, error));

        res.status(200);
        res.send(provider);
    }
    catch (error) {
        handleError(res, error);
    }
}

// DELETE ALL
module.exports.deleteAll = function (req, res) {
    try {
        Provider.deleteMany({})
            .then(result => {
                if (result.deletedCount === 0) {
                    res.status(400);
                    res.send("List is empty. Nothing to delete.");
                }
                res.status(200);
                res.send('All providers deleted');
            })
            .catch(error => handleError(res, error));   
    }
    catch (error) {
        handleError(res, error);
    }
}