require("dotenv").config();

const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const mongoose = require("mongoose");

function startExpress() {
  const app = express()
    .use(cors())
    .use(morgan("dev"))
    .use(express.json())
    .use("/api", require("./api/routes"))

    .listen(process.env.PORT, () => {
      console.log(`> Listening on port: ${process.env.PORT}`);
    });
}

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    startExpress();
  })
  .catch((error) => console.log(error));
