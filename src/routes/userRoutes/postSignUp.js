const express = require("express");
const bcrypt = require("bcrypt");

const UserManagementSchema =require("../../schema/userSchema")

const postSignUpRouter = express.Router();

postSignUpRouter.post("/", async (req, res) => {
  try {
    const Bpassword = await bcrypt.hash(req.body.Password, 10);
    const authPost = new UserManagementSchema({
      Name: req.body.Name,
      Email: req.body.Email,
      Password: Bpassword,
    });
    const sendData = await authPost.save();
    res.json(sendData);
  } catch (error) {
    console.log(error);
    res.sendStatus(503);
  }
});

module.exports = postSignUpRouter;
