import express from "express";

import subscriptionSchema from "../../schema/subscriptionSchema";

const router = express.Router();

router.delete("/", async (req, res) => {
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

export { router as deleteSubscriptionRouter }; 
