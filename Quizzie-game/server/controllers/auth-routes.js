const User = require("../models/user-models");
const Quiz = require("../models/quizModel");
const bcrypt = require("bcryptjs");

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const userExist = await User.findOne({ email });
    console.log(userExist);
    if (!userExist) {
      return res.status(400).json({ message: "Invalid Credentials" });
    }

    const user = await bcrypt.compare(password, userExist.password);

    if (user) {
      res.status(200).json({
        msg: "Login Successful",
        token: await userExist.generateToken(),
        userId: userExist._id.toString(),
      });
    } else {
      res.status(401).json({ message: "Invalid Email or Password" });
    }
  } catch (error) {
    console.log(error);
  }
};

const register = async (req, res) => {
  try {
    console.log(req.body);
    const { name, email, password, confirmPassword } = req.body;

    const userExist = await User.findOne({ email });

    if (userExist) {
      return res.status(400).json({ msg: "email already exists" });
    }

    const saltRound = 6;
    const hash_password = await bcrypt.hash(password, saltRound);
    const hash_confirmPassword = await bcrypt.hash(confirmPassword, saltRound);

    const userCreated = await User.create({
      name,
      email,
      password: hash_password,
      confirmPassword: hash_confirmPassword,
    });

    res.status(200).json({
      msg: "User Created",
      token: await userCreated.generateToken(),
      userId: userCreated._id.toString(),
    });
  } catch (error) {
    console.log("error");
  }
};

const home = () => {
  try {
    res.send("Home Page");
  } catch (error) {
    console.log("error");
  }
};


// Assuming you're using the 'fetch' API or 'axios' for making HTTP requests

const saveQuizToDatabase = async (formData) => {
  try {
    const response = await fetch('http://localhost:3000/saveQuiz', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();
    console.log(data.message);
  } catch (error) {
    console.error('Error saving quiz:', error);
  }
};

module.exports = { login, register, home, saveQuizToDatabase };
