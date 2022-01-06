const Photo = require('../models/photoModel');

exports.createPhoto = async (req, res) => {
  try {

    let uploadeImage = req.files.image;
    let uploadPath =   'public/' + uploadeImage.name.trim();
    const course = await Photo.create({
        ...req.body,
        photo: 'uploads/'+ uploadPath
    });
    res.status(201).json({

        course
    })
  } catch (err) {
    res.status(400).json({
      status: "faill",
      err,
    });
  }
};