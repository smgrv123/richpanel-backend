import express from "express";

import plansSchema from "../../schema/plansSchema";
import planInterface from "../../interfaces/planInterface";

const router = express.Router();

router.post("/", async (req: any, res: any) => {
  const plan = new plansSchema(req.body);
  try {
    const saved: planInterface | undefined = await plan.save();
    res.status(200).json({ message: saved });
  } catch (error: any) {
    res.send("error");
  }
});

export { router as PostRouter };
