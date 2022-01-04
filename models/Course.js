const mongoose = require("mongoose");
const slugify = require('slugify')
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
  slug: {
    type: String,
    unique:true
  }
});

CourseSchema.pre('validate', function(next){

  this.slug = slugify(this.name,{
    strict: true,
    lower:true
  })
next();
});

const Course = mongoose.model('Courses',CourseSchema);

module.exports = Course;