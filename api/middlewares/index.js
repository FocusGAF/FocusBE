const jwt = require("jsonwebtoken");
const User = require("../models/user.model");

function checkAuth(req, res, next) {
  //checkeamos autenticación, si el usuario está logueado y tiene token
  if (!req.headers.authorization)
    return res.status(401).send("Token not found"); // comprobamos que nos envia el token en el req.headers

  jwt.verify(
    req.headers.authorization,
    process.env.SECRET,
    async (err, result) => {
      if (err) return res.status(401).send("Token not valid");

      const user = await User.findOne({ where: { email: result.email } });
      if (!user) return res.status(401).send("User not found");

      res.locals.user = user;

      next();
    }
  );
}

module.exports = { checkAuth };
