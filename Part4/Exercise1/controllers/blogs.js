const blogRouter = require("express").Router();
const { toInteger } = require("lodash");
const Blog = require("../models/blog");
const ObjectId = require("mongodb").ObjectID;

const jwt = require("jsonwebtoken");

const getTokenFrom = (request) => {
  console.log("requests: ", request);
  const authorization = request.get("authorization");
  console.log("authorization", authorization);
  if (authorization && authorization.toLowerCase().startsWith("bearer ")) {
    return authorization.substring(7);
  }
  return null;
};

blogRouter.get("/", (request, response) => {
  console.log("requests: ", request);
  Blog.find({}).then((blogs) => {
    response.json(blogs);
  });
});

blogRouter.post("/", async (request, response) => {
  const token = getTokenFrom(request);
  const decodedToken = jwt.verify(token, process.env.SECRET);

  if (!token || !decodedToken.id) {
    return response.status(401).json({ error: "token missing or invalid" });
  }

  const user = await User.findById(decodedToken.id);

  const blog = new Blog({
    title: body.title,
    author: body.author,
    url: body.url,
    likes: body.likes,
    user: user.id,
    //user: {
    //type: mongoose.Schema.Types.ObjectId,
    //ref: user,
    //},
  });
  const savedBlog = blog.save();
  user.blogs = user.blogs.concat(savedBlog.id);
  await user.save();
  response.status(201).json(result);
});

blogRouter.delete("/:id", async (request, response) => {
  const deleteID = request.params.id;
  console.log("ID", deleteID);
  await Blog.findByIdAndDelete(deleteID);

  response.status(204).end();
});

blogRouter.patch("/:id", async (request, response) => {
  const patchID = request.params.id;
  console.log("ID", request.body);
  await Blog.findByIdAndUpdate(patchID, request.body, (err, result) => {
    response.send(result);
  });

  response.status(204).end();
});

module.exports = blogRouter;
