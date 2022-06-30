const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { validateUser } = require("../helpers/userValidator");
const { User } = require("../models/user");

const router = express.Router();

router.post("/", async (req, res) => {
  const { error } = validateUser(req.body);

  if (error) return res.status(400).send(error.details[0].message);

  try {
    let user = await User.findOne({ email: req.body.email });
    if (user) res.status(400).send("User with that email already exist..");

    const { name, email, password } = req.body;

    user = new User({
      name,
      email,
      password,
    });

    const salt = await bcrypt.genSalt(10);

    user.password = await bcrypt.hash(user.password, salt);

    await user.save();

    //generate token
    const secretKey = process.env.SECRET_KEY;

    const token = jwt.sign(
      { _id: user._id, name: user.name, email: user.email },
      secretKey
    );

    res.send(token);
  } catch (error) {
    res.status(500).send(error.message);
    console.log(error);
  }
});

module.exports = router;
