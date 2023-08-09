const express = require('express');
const router = express.Router();
const mainController = require('../controller/mainController');

router.get('/', mainController.index);
router.get('/detalle-menu/:id', mainController.detalle);


module.exports = router;
