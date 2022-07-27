const express = require("express");
const mongoose = require("mongoose");
const env = require("dotenv");
const bodyParser = require("body-parser");
const cors = require("cors");

const planPostRouter = require("./src/routes/planRoutes/post");
const planGetRouter = require("./src/routes/planRoutes/get");

const postSignUpRouter = require("./src/routes/userRoutes/postSignUp");
const postLoginRouter = require("./src/routes/userRoutes/postLogin");

const subScriptionPostRouter = require("./src/routes/subscriptionRoutes/post");
const getSubscriptionRouter = require("./src/routes/subscriptionRoutes/get");
const deleteSubscriptionRouter = require("./src/routes/subscriptionRoutes/delete");

const port = process.env.PORT || 5000;
const app = express();

env.config();
app.use(cors());
app.use(bodyParser.json());

app.listen(port);

app.use("/plans/post", planPostRouter);
app.use("/plans/get", planGetRouter);
app.use("/user/signup", postSignUpRouter);
app.use("/user/login", postLoginRouter);
app.use("/subscription/post", subScriptionPostRouter);
app.use("/subscription/get", getSubscriptionRouter);
app.use("/subscription/delete", deleteSubscriptionRouter);

const DB_CONNECT = process.env.DB_CONNECT;

mongoose.connect(
  DB_CONNECT,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => {
    console.log("connected to db");
  }
);
