const mongoose = require("mongoose");
const supertest = require("supertest");
const { response } = require("../app");
const app = require("../app");

const mysuper = supertest(app);

test("blogs are returned as json", async () => {
  await mysuper
    .get("/api/blogs")
    .expect(200)
    .expect("Content-Type", /application\/json/);
}, 1000000);

test("id exists", async () => {
  const response = await mysuper.get("/api/blogs");
  expect(response.body[0].id).toBeDefined();
});

test("Blog posts successfully sends", async () => {
  const myRandInt = Math.random();
  console.log(myRandInt);
  const newBlog = {
    title: "test",
    author: "test",
    url: "www.thisisaurl.bla",
    likes: myRandInt,
  };
  await mysuper
    .post("/api/blogs")
    .send(newBlog)
    .expect(201)
    .expect("Content-Type", /application\/json/);

  const response = await mysuper.get("/api/blogs");
  const promiseLikess = response.body.map((r) => r.likes);
  await Promise.all(promiseLikess);
  expect(promiseLikess).toContain(myRandInt);
});

//test("Make sure if likes is missing, it becomes 0", async () => {}); // missing exercies 4.11
//test("4.12", async () => {}); // missing exercies 4.12

afterAll(() => {
  mongoose.connection.close();
});
