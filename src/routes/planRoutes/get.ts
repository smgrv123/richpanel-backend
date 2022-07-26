import express from "express";

import plansSchema from "../../schema/plansSchema";

const router = express.Router();

router.get("/", async (req: any, res: any) => {
  const findUser: any | null = await plansSchema.find();
  findUser ? res.json(findUser) : res.json("Data not present");
});

export { router as getRouter };
