const userModel = require("../models/userModel");

// login callback function
const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await userModel.findOne({ email, password });
    if (!user) {
      return res.status(404).send("User not found");
    }
    res.status(200).json({
      success: false,
      user,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error,
    });
  }
};

// Register callback function
const registerController = async (req, res) => {
  // Added 'res' parameter
  try {
    // const newUser = new userModel(req.body);
    const { name, email, password } = req.body;
    const newUser = new userModel({
      name,
      email,
      password,
    });
    await newUser.save();
    res.status(201).json({
      success: true,
      newUser,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error,
    });
  }
};

module.exports = { loginController, registerController };
