const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const CourseSchema = Schema({
  name: {
    type: String,
    unique:true,
    required: true,
    
  },
  description: {
    type: String,
    trim: true,
    unique:true,
    required: true,
  },
  date: { type: Date, default: Date.now },
});

const Course = mongoose.model('Courses',CourseSchema);

module.exports = Course;