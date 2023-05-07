const express = require("express");
const { carModel } = require("../Models/car.model");
require("dotenv").config();
const car_bike_data = express.Router();


car_bike_data.get("/", async (req, res) => {
  try {
    const allCars = await carModel.find({});
    const page = parseInt(req.query.page)
    const limit = parseInt(req.query.limit)

    const startIndex = (page - 1) * limit
    const lastIndex = (page) * limit

    const results = {}
    results.totalCarsCount = allCars.length;
    results.pageCount = Math.ceil(allCars.length / limit);

    if (lastIndex < allCars.length) {
      results.next = {
        page: page + 1,
      }
    }
    if (startIndex > 0) {
      results.prev = {
        page: page - 1,
      }
    }
    results.result = allCars.slice(startIndex, lastIndex);
    res.send(results)
  } catch (err) {
    res.send(err);
    console.log(err)
  }
});


car_bike_data.get("/:key", async (req, res) => {
  console.log(req.params.key)
  try {
    const search_data = await carModel.find(
      {
        "$or": [
          { "name": { $regex: req.params.key } },
          { "brand": { $regex: req.params.key } },
          { "fuel_type": { $regex: req.params.key } },
          { "transmission": { $regex: req.params.key } }
        ]
      });

    const page = parseInt(req.query.page)
    const limit = parseInt(req.query.limit)

    const startIndex = (page - 1) * limit
    const lastIndex = (page) * limit

    const results = {}
    results.totalCarsCount = search_data.length;
    results.pageCount = Math.ceil(search_data.length / limit);

    if (lastIndex < search_data.length) {
      results.next = {
        page: page + 1,
      }
    }
    if (startIndex > 0) {
      results.prev = {
        page: page - 1,
      }
    }
    results.result = search_data.slice(startIndex, lastIndex);
    res.send(results)

  } catch (err) {
    res.send(err);
    console.log(err)
  }
});



module.exports = { car_bike_data }