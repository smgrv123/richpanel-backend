import express from "express";
import bcrypt from "bcrypt";

import UserManagement from "../../schema/userSchema";
import userInterface from "../../interfaces/userInterface";

const router = express.Router();

router.post("/", async (req: any, res: any) => {
  try {
    const user: userInterface | null = await UserManagement.findOne({
      Email: req.body.Email,
    });
    if (user) {
      bcrypt.compare(req.body.Password, user.Password, function (err, result) {
        if (!err) {
          res.json({ result: result });
        }
      });
    }
  } catch (error) {
    res.send({ message: error });
  }
});

export { router as postLoginRouter };
