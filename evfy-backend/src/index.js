require("dotenv").config();
const cors = require('cors');
const bcrypt = require('bcrypt');
const express = require('express');
const Mongoconnect = require('../database/db.connect');
const { userRegister } = require('../Routes/userRoute');
const { car_bike_data } = require("../Routes/carRoute");
let Port = process.env.PORT;

const app = express();
app.use(cors());
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/user", userRegister)

app.use("/carbikedata", car_bike_data);

app.listen(Port, async (req,res) => {
    try {
      await Mongoconnect();
      console.log(`Server is running on http://localhost:5000`);
    } catch (error) {
      console.log(` errror is => ${error}`);
    }  
});