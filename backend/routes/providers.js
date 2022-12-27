var express = require('express');
var router = express.Router();
const providerController = require('../controllers/providers');

/* GET list page. */
router.get('/', providerController.list);

/* GET details page. */
router.get('/details/:id', providerController.details);

/* GET edit page. */
router.get('/edit/:id', providerController.edit);
/* POST update page. */ 
router.post('/update/:id', providerController.update);

/* GET add provider page. */
router.get('/addform', providerController.addform);
/* POST add. */ 
router.post('/add', providerController.add);

/* GET delete. */ 
router.get('/delete/:id', providerController.delete);


module.exports = router;
