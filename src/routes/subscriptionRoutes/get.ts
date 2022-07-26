import express from "express";

import subscriptionSchema from "../../schema/subscriptionSchema";
import subscriptionInterface from "../../interfaces/subscriptionInterface";

const router = express.Router();

router.get("/", async (req:any,res: any) => {
  const findUser: subscriptionInterface | null = await subscriptionSchema.findOne({email:req.body.email});
  findUser ? res.json(findUser) : res.json("Data not present");
});

export { router as getSubscriptionRouter };