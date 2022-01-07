const express = require('express');
const { body } = require('express-validator');


const authController = require('../controller/authController');
const authMiddleWare = require('../middleWare/authMiddleWare');

const router = express.Router();

router.route('/signup').post(
    [
        body('name').not().isEmpty().withMessage('Please Enter Your Name'),
    ]
    
    ,
    
    authController.createUser);
router.route('/login').post(authController.loginUser);
router.route('/logout').get(authController.logoutUser);
router.route('/dashboard').get(authMiddleWare,authController.dashboradPage);

module.exports = router;
