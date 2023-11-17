const User = require("../models/userSchema.js");

const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const signup = async (req, res) => {
  const saltRounds = bcrypt.genSaltSync(parseInt(process.env.SALTROUNDS));
  const hashedPassword = bcrypt.hashSync(req.body.password, saltRounds);
  console.log(saltRounds);
  req.body.password = hashedPassword;
  try {
    const user = await User.create(req.body);
    const payload = { email: user.email };
    const token = jwt.sign(payload, process.env.SECRET, { expiresIn: "1h" });
    return res.status(200).json({ token: token, message: "User created" });
  } catch (error) {
    res.status(500).send("Email duplicado");
  }
};

module.exports = { signup };
