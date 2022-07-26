import express from "express";
import mongoose, { ConnectOptions } from "mongoose";
import env from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";

import { PostRouter as planPostRouter } from "./src/routes/planRoutes/post";
import { getRouter as planGetRouter } from "./src/routes/planRoutes/get";

import { PostRouter as userPostSignUp } from "./src/routes/userRoutes/postSignUp";
import { postLoginRouter } from "./src/routes/userRoutes/postLogin";

import {SubscriptionPostRouter} from "./src/routes/subscriptionRoutes/post";
import {getSubscriptionRouter} from "./src/routes/subscriptionRoutes/get";
import {deleteSubscriptionRouter} from "./src/routes/subscriptionRoutes/delete";

const port = process.env.PORT || 3000;
const app = express();

env.config();
app.use(cors());
app.use(bodyParser.json());

app.listen(port);

app.use("/plans/post", planPostRouter);
app.use("/plans/get", planGetRouter);
app.use("/user/signup", userPostSignUp);
app.use("/user/login", postLoginRouter);
app.use("/subscription/post", SubscriptionPostRouter);
app.use("/subscription/get", getSubscriptionRouter);
app.use("/subscription/delete", deleteSubscriptionRouter);

const DB_CONNECT: string = process.env.DB_CONNECT!;

mongoose.connect(
  DB_CONNECT,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  } as ConnectOptions,
  () => {
    console.log("connected to db");
  }
);
