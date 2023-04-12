var express = require("express");
var router = express.Router();
const mainController = require('../controllers/main.controller');

router.post('/providers', mainController.create); // Post   /api/providers

router.get('/providers', mainController.readAll); // Get All

router.get('/providers/:id', mainController.readOne);   // Get one

router.put('/providers/:id', mainController.update);    // Put

router.delete('/providers/:id', mainController.deleteOne); // Delete one

router.delete('/providers', mainController.deleteAll);   // Delete all

// no matching api
router.post('/*', notFound)
router.get('/*', notFound)
router.put('/*', notFound)
router.delete('/*', notFound)

function notFound(req, res){
    res.status(400);
    res.send('Not a valid endpoint');
}

module.exports = router;