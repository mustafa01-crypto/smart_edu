const express = require('express');

const courseController = require('../controller/courseController');

const router = express.Router();

router.route('/').post(courseController.createCourse);
router.route('/').get(courseController.getAllCourses);


module.exports = router;
