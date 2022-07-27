const express = require("express");

const plansSchema =require("../../schema/plansSchema")

const getPlanRouter = express.Router();

getPlanRouter.get("/", async (req, res) => {
  const findUser = await plansSchema.find();
  findUser ? res.json(findUser) : res.json("Data not present");
});

module.exports = getPlanRouter;
