require("dotenv").config();
const express = require("express");
const bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");
const nodemailer = require('nodemailer');
const { userModel } = require("../Models/user.model");
let JWT_SECRET = process.env.JWT_SECRET;
const userRegister = express.Router();
// -----------------------signup-----------------------//

userRegister.post("/signup", async (req, res) => {
  const { fname, lname, email, password, mobile } = req.body;

  const encryptedPassword = await bcrypt.hash(password, 10);
  try {
    const oldUser = await userModel.findOne({ email });

    if (oldUser) {
      return res.send({ status: "User already Exists" });
    }
    await userModel.create({
      fname,
      lname,
      email,
      password: encryptedPassword,
      mobile
    });
    res.send({ status: "success" });
  } catch (error) {
    res.send({ status: "error" });
  }
});

// ------------------------login-----------------------------------//

userRegister.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const user = await userModel.findOne({ email });
  if (!user) {
    return res.send({ status: "User Not Registered" });
  }
  if (await bcrypt.compare(password, user.password)) {
    const token = jwt.sign({ email: user.email }, JWT_SECRET, {
      expiresIn: "60m",
    });

    if (res.status(201)) {
      return res.send({ status: "ok", token: token, name:`${user.fname} ${user.lname}`});
    } else {
      return res.send({ status: "error" });
    }
  }
  res.send({ status: "error", error: "InvAlid Password" });
});

// ------------forgot password-------------------------------//

userRegister.post("/forgot-password", async (req, res) => {
  const { email } = req.body;
  console.log(email);
  try {
    const oldUser = await userModel.findOne({ email });
    if (!oldUser) {
      return res.send({ status: "User Not Exists!!" });
    }
    const secret = JWT_SECRET + oldUser.password;
    const token = jwt.sign({ email: oldUser.email, id: oldUser._id }, secret, {
      expiresIn: "5m",
    });
    const link = `https://evfy-backend.onrender.com/user/reset-password/${oldUser._id}/${token}`;
    var transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "rohini19394@gmail.com",
        pass: "wzikuhxufcvwnfxs",
      },
    });

    var mailOptions = {
      from: "rohini19394@gmail.com",
      to: email,
      subject: "Password Reset",
      text: link,
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("Email sent: " + info.response);
        res.send({ status: "Email sent" })
      }
    });
    // console.log(link);
  } catch (error) {
    console.log(error);
  }
});

// -----------------get-reset password-----------------------------//

userRegister.get("/reset-password/:id/:token", async (req, res) => {
  const { id, token } = req.params;
  console.log(req.params);
  const oldUser = await userModel.findOne({ _id: id });
  if (!oldUser) {
    return res.json({ status: "User Not Exists!!" });
  }
  const secret = JWT_SECRET + oldUser.password;
  try {
    const verify = jwt.verify(token, secret);
    res.render("index", { email: verify.email, status: "Not Verified" });
  } catch (error) {
    console.log(error);
    res.send("Not Verified");
  }
});

// -----------------post-reset password-----------------------------//

userRegister.post("/reset-password/:id/:token", async (req, res) => {
  const { id, token } = req.params;
  const { password, confirm_password } = req.body;

  const oldUser = await userModel.findOne({ _id: id });
  if (!oldUser) {
    return res.json({ status: "User Not Exists!!" });
  }
  const secret = JWT_SECRET + oldUser.password;
  try {
    const verify = jwt.verify(token, secret);
    if (password === confirm_password) {
      const encryptedPassword = await bcrypt.hash(password, 10);
      await userModel.updateOne(
        {
          _id: id,
        },
        {
          $set: {
            password: encryptedPassword,
          },
        }
      );

      res.render("index", { email: verify.email, status: "Verified" });
    }
    else{
      res.render("index", { email: verify.email, status: "password and confirm_password not match" });
    }
  } catch (error) {
    console.log(error);
    res.json({ status: "Something Went Wrong" });
  }
});



module.exports = { userRegister }
