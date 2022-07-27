const express = require("express");

const subscriptionSchema =require("../../schema/subscriptionSchema")

const deleteSubscriptionRouter = express.Router();

deleteSubscriptionRouter.delete("/", async (req, res) => {
  try {
    const deleted = await subscriptionSchema.deleteOne({email: req.body.email });
    res.json({
      deleteCount: deleted.deletedCount,
      message: "Object has been successfully removed",
    });
  } catch (error) {
    res.json({ message: error });
  }
});

module.exports = deleteSubscriptionRouter;
