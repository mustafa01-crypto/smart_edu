const express = require('express');
const courseController = require('../controller/courseController');
const rolesMiddleware = require('../middleWare/rolesMiddleware');
const router = express.Router();

router.route('/').post(rolesMiddleware(['teacher','admin']),courseController.createCourse);
router.route('/').get(courseController.getAllCourses);
router.route('/:slug').get(courseController.getOneCourse);
router.route('/enroll').post(courseController.enrollCourse);


module.exports = router;
