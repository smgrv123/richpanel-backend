const express = require("express");

const subscriptionSchema =require("../../schema/subscriptionSchema")

const subScriptionPostRouter = express.Router();

subScriptionPostRouter.post("/", async (req, res) => {
  const plan = new subscriptionSchema(req.body);
  try {
    const saved = await plan.save();
    res.status(200).json({ message: saved });
  } catch (error) {
    res.send("error");
  }
});

module.exports = subScriptionPostRouter;
