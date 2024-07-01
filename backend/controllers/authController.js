const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

dotenv.config();

const register = async (req, res) => {
  const { username, email, password, role } = req.body;
  try {
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).send({ message: "User already exists" });
    }
    user = new User({
      username,
      email,
      password,
      role,
    });
    await user.save();
    res.status(201).send({ message: "User registered" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send({ message: "Server error" });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).send({ message: "Invalid credentials" });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).send({ message: "Invalid credentials" });
    }
    const payload = {
      id: user.id,
      role: user.role,
    };
    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
    res.send({ token });
  } catch (err) {
    console.error(err.message);
    res.status(500).send({ message: "Server error" });
  }
};

const logout = (req, res) => {
  res.send({ message: "Logged out" });
};

module.exports = { register, login, logout };
