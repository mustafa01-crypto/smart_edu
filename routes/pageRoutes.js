const express = require('express');
const pageController = require('../controller/pageController');
const redirectMiddlware = require('../middleWare/redirectMiddleware');
const router = express.Router();

router.route('/').get(pageController.indexPage);
router.route('/about').get(pageController.aboutPage);
router.route('/register').get(redirectMiddlware,pageController.registerPage);
router.route('/login').get(redirectMiddlware,pageController.loginPage);
router.route('/contact').get(pageController.contactPage);
router.route('/contact').post(pageController.sendMessage);

module.exports = router;
