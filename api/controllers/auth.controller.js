const User = require("../models/userSchema.js");

const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const signup = async (req, res) => {
  const saltRounds = bcrypt.genSaltSync(parseInt(process.env.SALTROUNDS));
  const hashedPassword = bcrypt.hashSync(req.body.password, saltRounds);
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
async function login(req, res) {
  try {
    const [user] = await User.find({
      email: req.body.email,
    });
    console.log(user)
    if (!user)
      return res.status(400).send("Error: Email or Password incorrect");

    const comparePass = bcrypt.compareSync(req.body.password, user.password);

    if (comparePass) {
      const payload = { email: user.email };
      const token = jwt.sign(payload, process.env.SECRET, { expiresIn: "1h" });
      return res.status(200).send({ token });
    } else {
      return res.status(404).json("Error: Email or Password incorrect");
    }
  } catch (error) {
    return res.status(500).send(error.message);
  }
}

module.exports = { signup, login };
