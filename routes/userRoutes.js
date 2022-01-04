const express = require('express');
const authController = require('../controller/authController');
const authMiddleWare = require('../middleWare/authMiddleWare');
const router = express.Router();

router.route('/signup').post(authController.createUser);
router.route('/login').post(authController.loginUser);
router.route('/logout').get(authController.logoutUser);
router.route('/dashboard').get(authMiddleWare,authController.dashboradPage);

module.exports = router;
