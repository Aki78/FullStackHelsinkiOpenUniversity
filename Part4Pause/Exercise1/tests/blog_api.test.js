const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')

const mysuper = supertest(app)

test('notes are returned as json', async () => {
  await mysuper
    .get('/api/blogs')
    .expect(200)
    .expect('Content-Type', /application\/json/)
})

afterAll(() => {
  mongoose.connection.close()
})
