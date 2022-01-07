const Photo = require('../models/photoModel');

exports.createPhoto = async (req, res) => {
  try {

    let uploadeImage = req.files.image;
    let uploadPath =   'public/' + uploadeImage.name.trim();
    const photo = await Photo.create({
        ...req.body,
        photo: 'uploads/'+ uploadPath
    });
    res.status(201).json({

        photo
    })
  } catch (err) {
    res.status(400).json({
      status: "faill",
      err,
    });
  }
};

exports.getAllPhotos = async (req, res) => {
  try {

    
    const photos = await Photo.find();
    res.status(200).json({

        photos
    })
  } catch (err) {
    res.status(400).json({
      status: "faill",
      err,
    });
  }
};