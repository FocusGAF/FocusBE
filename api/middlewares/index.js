const jwt = require("jsonwebtoken");
const User = require("../models/userSchema");

function checkAuth(req, res, next) {
  if (!req.headers.authorization)
    return res.status(401).send("Token not found"); // comprobamos que nos envia el token en el req.headers

  jwt.verify(
    req.headers.authorization,
    process.env.SECRET,
    async (err, result) => {
      if (err) return res.status(401).send("Token not valid");
      const user = await User.findOne({ email: result.email } );
      console.log(user)
      if (!user) return res.status(401).send("User not found");

      res.locals.user = user;

      next();
    }
  );
}

module.exports = { checkAuth };
