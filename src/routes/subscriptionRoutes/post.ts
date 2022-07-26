import express from "express";

import subscriptionSchema from "../../schema/subscriptionSchema";
import subscriptionInterface from "../../interfaces/subscriptionInterface";

const router = express.Router();

router.post("/", async (req: any, res: any) => {
  const plan = new subscriptionSchema(req.body);
  try {
    const saved: subscriptionInterface | undefined = await plan.save();
    res.status(200).json({ message: saved });
  } catch (error: any) {
    res.send("error");
  }
});

export { router as SubscriptionPostRouter };
