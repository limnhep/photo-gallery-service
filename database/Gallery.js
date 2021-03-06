const mongoose = require('mongoose');
// const db = require('./index.js');

const gallerySchema = new mongoose.Schema({
  user_id: Number,
  room_id: Number,
  title: String,
  ratings: Number,
  number_of_reviews: Number,
  isSuperhost: Boolean,
  address: String,
  save_status: [{
    isSaved: Boolean,
    name: String,
  }],
  room_photos: [{ imageUrl: String, description: String }],
});

const Gallery = mongoose.model('Gallery', gallerySchema);

module.exports = Gallery;
