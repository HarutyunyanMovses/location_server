const mongoose = require('mongoose')

const usersSchame = new mongoose.Schema({
  location: {
    type: String,
    required: true,
  }
},{timestamps: true});

module.exports = mongoose.model("Lcation", usersSchame);