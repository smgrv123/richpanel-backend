import express from "express";
import bcrypt from "bcrypt";

import UserManagementSchema from "../../schema/userSchema";
import userInterface from "../../interfaces/userInterface";

const router = express.Router();

router.post("/", async (req: any, res: any) => {
  try {
    const Bpassword: string = await bcrypt.hash(req.body.Password, 10);
    const authPost = new UserManagementSchema({
      Name: req.body.Name,
      Email: req.body.Email,
      Password: Bpassword,
    });
    const sendData: userInterface | undefined = await authPost.save();
    res.json(sendData);
  } catch (error) {
    console.log(error);
    res.sendStatus(503);
  }
});

export { router as PostRouter };
