const mongoose = require('mongoose')

const usersSchame = new mongoose.Schema({
  message: {
    type: String,
    required: true,
  }
},{timestamps: true});

module.exports = mongoose.model("message", usersSchame);