const express = require("express");
const bcrypt = require("bcrypt");

const UserManagement =require("../../schema/userSchema")

const postLoginRouter = express.Router();

postLoginRouter.post("/", async (req, res) => {
  try {
    const user = await UserManagement.findOne({
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

module.exports = postLoginRouter;
