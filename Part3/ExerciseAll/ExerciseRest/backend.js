require("dotenv").config();
uniqueValidator = require('mongoose-unique-validator')
const { request } = require("express");
const cors = require("cors");
const morgan = require("morgan");
const express = require("express");
const app = express();
const phoneBook = require("./phoneBook");

app.use(cors());
app.use(express.static("build"));
app.use(express.json());
morgan.token("body", (req, res) => JSON.stringify(req.body));
app.use(
  morgan(
    ":method :url :status :res[content-length] - :response-time ms posted :body"
  )
);

app.get("/persons", (request, response) => {
  phoneBook.find({}).then((person) => {
    console.log("the person is:", person);
    response.json(person);
  });
});

app.get("/api/persons/:id", (request, response) => {
  phoneBook
    .findById(request.params.id)
    .then((person) => {
      if (person) response.json(person);
      else response.status(404).end();
    })
    .catch((error) => next(error));
  //.catch((error) => {
  //console.log(error);
  ////response.status(500).end();
  //response.status(400).send({ error: "malformatted id" });
  //});
});

app.post("/persons", (request, response) => {
  const addPerson = request.body;
  //console.log(addPerson);
  console.log(addPerson, "name");
  if (addPerson.name === undefined) {
    console.log(addPerson.name, "EEEEERRRRRR");
    return response.status(400).json({ error: "content missing" });
  }
  //if ( // use mongodb find instead
  //persons.reduce(
  //(acc, person) => acc && person.name !== addPerson.name,
  //true
  //) &&
  //addPerson.name &&
  //addPerson.number
  //) {
  const phone = new phoneBook({
    name: addPerson.name,
    number: addPerson.number,
  });
  //response.json(phone);
  phone.save().then((savedphoneBook) => {
    response.json(savedphoneBook);
  });
  //} else response.status(400);
  //.json({ error: "name already exists, or name or number undefined" });
});

app.delete("/api/persons/:id", (request, response, next) => {
  phoneBook
    .findByIdAndRemove(request.params.id)
    .then((result) => {
      response.status(204).end();
    })
    .catch((error) => next(error));
});

app.put("/api/persons/:id", (request, response, next) => {
  const body = request.body;

  const phone = {
    name: body.name,
    number: body.number,
  };
  if (phone.name)
    phoneBook
      .findByIdAndUpdate(request.params.id, phone, { new: true })
      .then((updatedNumber) => {
        response.json(updatedNumber);
      })
      .catch((error) => next(error));
});

const errorHandler = (error, request, response, next) => {
  console.error(error.message);

  if (error.name === "CastError") {
    return response.status(400).send({ error: "malformatted id" });
  }

  next(error);
};

// this has to be the last loaded middleware.
app.use(errorHandler);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
