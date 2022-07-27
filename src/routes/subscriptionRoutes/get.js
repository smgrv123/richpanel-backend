const express = require("express");

const subscriptionSchema =require("../../schema/subscriptionSchema")

const getSubscriptionRouter = express.Router();

getSubscriptionRouter.get("/", async (req, res) => {
  const findUser = await subscriptionSchema.findOne({ email: req.body.email });
  findUser ? res.json(findUser) : res.json("Data not present");
});

module.exports = getSubscriptionRouter;
