const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  fname: String,
  lname: String,
  email: {
    type: String,
    require: true,
    unique: true,
  },
  password: String,
  mobile : Number,
});

const userModel =  mongoose.model("userModel", userSchema);

module.exports = {userModel}