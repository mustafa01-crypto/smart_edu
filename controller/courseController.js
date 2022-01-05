const Course = require("../models/Course");
const Category = require("../models/Category");

exports.createCourse = async (req, res) => {
  try {
    const course = await Course.create({
      name: req.body.name,
      description: req.body.name,
      category: req.body.category,
      user: req.session.userID,
    });
    res.status(201).redirect("courses");
  } catch (err) {
    res.status(400).json({
      status: "faill",
      err,
    });
  }
};

exports.getAllCourses = async (req, res) => {
  try {
    const categorySlug = req.query.categories;
    const category = await Category.findOne({ slug: categorySlug });

    let filter = {};

    if (categorySlug) {
      filter = { category: category._id };
    }

    const categories = await Category.find();
    const courses = await Course.find(filter).sort("-date");
    res.render("courses", {
      courses,
      categories,
      page_name: "courses",
    });
  } catch (err) {
    res.status(400).json({
      status: "faill",
      err,
    });
  }
};

exports.getOneCourse = async (req, res) => {
  try {
    const course = await Course.findOne({ slug: req.params.slug });
    res.render("course", {
      course,
      page_name: "courses",
    });
  } catch (err) {
    res.status(400).json({
      status: "faill",
      err,
    });
  }
};
