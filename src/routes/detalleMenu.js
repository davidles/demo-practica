const express = require('express');
const router = express.Router();
const mainController = require('../controller/mainController');

//detall/2
router.get('/:id', mainController.detalle);


module.exports = router;