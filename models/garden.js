const mongoose = require('mongoose');

const gardenSchema = mongoose.Schema({
  name: String,
  location: String,
  areaAcres: Number,
  yearOpened: Number
});

module.exports = mongoose.model('Garden', gardenSchema);