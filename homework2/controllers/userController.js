const userModel = require("../model/userModel");
const bcrypt = require("bcrypt.js");
const Joi = require("joi");

const {
  generateAccessToken,
  generateRefreshToken,
} = require("../middlewares/token");

const getAllUser = async (req, res) => {
  try {
    const user = await userModel.find();
    res.json(user);
  } catch (error) {
    console.log(error);
  }
};

const createNewUser = async (req, res) => {
  try {
    const body = req.body;
    const newUser = await userModel.create(body);
    res.json(newUser);
  } catch (error) {
    res.status(400);
    throw new Error(error);
  }
};

module.exports = { getAllUser, createNewUser };
