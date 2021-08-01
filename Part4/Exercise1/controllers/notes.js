const blogRouter = require("express").Router();
const { toInteger } = require("lodash");
const Blog = require("../models/note");
const ObjectId = require("mongodb").ObjectID;

blogRouter.get("/", (request, response) => {
  Blog.find({}).then((blogs) => {
    response.json(blogs);
  });
});

blogRouter.post("/", (request, response) => {
  const blog = new Blog(request.body);

  blog.save().then((result) => {
    response.status(201).json(result);
  });
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
