const userRouter = require("express").Router();
const User = require("../models/user");
const bcrypt = require("bcrypt");

userRouter.get("/", (request, response) => {
  User.find({}).then((blogs) => {
    response.json(blogs);
  });
});

userRouter.post("/", async (request, response) => {
  const body = request.body;
  const saltRounds = 10;
  const passwordHash = await bcrypt.hash(body.password, saltRounds);
  const usenameExists = await User.find({ username: body.username });

  if (usenameExists) {
    return response.status(409).json({
      error: "username already exists.",
    });
  }

  if (body.password < 4)
    return response.status(403).json({
      error: "password too short.",
    });

  const user = new User({
    username: body.username,
    name: body.name,
    passwordHash: passwordHash,
    id: body.name,
  });

  const savedUser = await user.save();

  response.json(savedUser);
});

module.exports = userRouter;
