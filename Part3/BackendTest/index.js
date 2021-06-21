const Notes = require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const Note = require("./models/notes");
const app = express();

mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
});

const notesSchema = new mongoose.Schema({
  content: String,
  date: Date,
  important: Boolean,
});

//let notes = [
//{
//id: 1,
//content: "HTML is easy",
//date: "2019-05-30T17:30:31.098Z",
//important: true,
//},
//{
//id: 2,
//content: "Browser can execute only Javascript",
//date: "2019-05-30T18:39:34.091Z",
//important: false,
//},
//{
//id: 3,
//content: "GET and POST are the most important methods of HTTP protocol",
//date: "2019-05-30T19:20:14.298Z",
//important: true,
//},
//];

//app.get("/", (request, response) => {
//response.send("<h1>Hello World!</h1>");
//});
//

app.get("/api/notes", (request, response) => {
  Note.find({}).then((notes) => {
    response.json(notes);
  });
});

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

app.post("/api/notes", (request, response) => {
  const body = request.body;

  if (body.content === undefined) {
    return response.status(400).json({ error: "content missing" });
  }

  const note = new Note({
    content: body.content,
    important: body.important || false,
    date: new Date(),
  });

  note.save().then((savedNote) => {
    response.json(savedNote);
  });
});

app.get('/api/notes/:id', (request, response) => {
  Note.findById(request.params.id).then(note => {
    response.json(note)
  })
})
