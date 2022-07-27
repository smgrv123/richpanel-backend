const express = require("express");

const plansSchema = require("../../schema/plansSchema");

const postPlanRouter = express.Router();

postPlanRouter.post("/", async (req, res) => {
  const plan = new plansSchema(req.body);
  try {
    const saved = await plan.save();
    res.status(200).json({ message: saved });
  } catch (error) {
    res.send("error");
  }
});

module.exports = postPlanRouter;
