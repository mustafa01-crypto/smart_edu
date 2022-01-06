const express = require('express');
const photoController = require('../controller/photoController');

const router = express.Router();

router.route('/photos').post(photoController.createPhoto);


module.exports = router;
