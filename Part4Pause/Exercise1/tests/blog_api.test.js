const mongoose = require("mongoose");
const supertest = require("supertest");
const app = require("../app");

const api = supertest(app);

test("blogs are returned as json", async () => {
  await api
    .get("/api/blogs")
    .expect(200)
    .expect("Content-Type", /application\/json/);
});

//test("there are five blogs", async () => {
  //const response = await api.get("/api/blogs");
  //expect(response.body).toHaveLength(5);
//});

//test("the first note is about HTTP methods", async () => {
  //const response = await api.get("/api/blogs");
  //expect(response.body[0].title).toBe("Ad");
//});

afterAll(() => {
  mongoose.connection.close();
});
