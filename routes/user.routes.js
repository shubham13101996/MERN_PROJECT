const express = require("express");
const UserModel = require("../models/UserModel");
const fs = require("fs");
const jwt = require("jsonwebtoken");
const userRouter = express.Router();
userRouter.get("/", (req, res) => {
  res.send({
    message: "ALL USER!!!",
  });
});

userRouter.post("/register", async (req, res) => {
  try {
    let data = new UserModel(req.body);
    data.save();
    res.send({
      message: "User registered succesfully",
    });
  } catch (error) {
    res.send({
      message: error.message,
    });
  }
});

userRouter.post("/login", async (req, res) => {
  const option = {
    expiresIn: "120000",
  };
  try {
    const token = jwt.sign(req.body, "shubham123");
    let data = await UserModel.find(req.body);

    if (data.length > 0) {
      res.send({
        message: "Login Successfully",
        token: token,
        userDetail: {
          username: data[0].username,
          role: data[0].role,
        },
      });
    } else {
      res.send({
        message: "Invalid Username or Password ",
      });
    }
  } catch (error) {
    res.send({
      message: error.message,
    });
  }
});

userRouter.patch("/:id", async (req, res) => {
  let { id } = req.params;
  try {
    await UserModel.findByIdAndUpdate({ _id: id }, req.body);
    res.send({
      message: " Data Updated Successfully",
    });
  } catch (error) {
    res.send({
      message: error.message,
    });
  }
});

userRouter.delete("/:id", async (req, res) => {
  let { id } = req.params;
  try {
    await UserModel.findByIdAndDelete({ _id: id });
    res.send({
      message: " Data Deleted Successfully",
    });
  } catch (error) {
    res.send({
      message: error.message,
    });
  }
});
module.exports = { userRouter };
