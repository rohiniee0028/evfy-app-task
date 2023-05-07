const mongoose = require('mongoose');

const carSchema = new mongoose.Schema({
  brand : String,
  image_url : String,
  name : String,
  city:String,
  fuel_type : String,
  cartype : String,
  price : Number,
  strikedoffprice : Number,
  transmission : String,
  air_bags : Boolean,
  variants : String,
  seating : Number,
});

const carModel =  mongoose.model("carModel", carSchema);

module.exports = {carModel}


