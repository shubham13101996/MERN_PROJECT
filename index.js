const express = require("express");
const { connection } = require("./db");
const { userLogger } = require("./middleware/userLogger");
const { userValidator } = require("./middleware/uservalidator");
const { userRouter } = require("./routes/user.routes");
const { roleValidator } = require("./middleware/roleValidator");
const app = express();
require("dotenv").config();

const port = process.env.PORT || 8000;
app.use(express.json());
app.use(userValidator);
app.use(userLogger);
app.use("/user", roleValidator);
app.use("/user", userRouter);
app.listen(port, async () => {
  try {
    await connection;
    console.log("connected to db");
  } catch (error) {
    console.log(error);
  }

  console.log("server is running on port ", port);
});
