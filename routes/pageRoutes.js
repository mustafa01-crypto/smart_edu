const express = require('express');

const pageController = require('../controller/pageController');

const router = express.Router();

router.route('/').get(pageController.indexPage);
router.route('/about').get(pageController.aboutPage);
router.route('/register').get(pageController.registerPage);
router.route('/login').get(pageController.loginPage);

module.exports = router;
