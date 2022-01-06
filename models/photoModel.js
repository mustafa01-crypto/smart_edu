const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const PhotoSchema = Schema({
  photo: {
    type: String,
    unique:true,
    required: true,
  }
});



const Photo = mongoose.model('Photos',PhotoSchema);

module.exports = Photo;