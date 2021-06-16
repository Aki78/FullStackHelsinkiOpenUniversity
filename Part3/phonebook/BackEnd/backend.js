const { request } = require("express");
const morgan = require("morgan");
const express = require("express");
const app = express();

app.use(express.json());
//morgan("tiny");
//morgan(function (tokens, req, res) {
//return [
//tokens.method(req, res),
//tokens.url(req, res),
//tokens.status(req, res),
//tokens.res(req, res, "content-length"),
//"-",
//tokens["response-time"](req, res),
//"ms",
//].join(" ");
//});
morgan.token("body", (req, res) => JSON.stringify(req.body));
app.use(
  morgan(
    ":method :url :status :res[content-length] - :response-time ms posted :body"
  )
);

let persons = [
  {
    name: "Ada Lovelace",
    number: "39-44-5323523",
    id: 1,
  },
  {
    name: "Dan Abramov",
    number: "12-43-234345",
    id: 2,
  },
  {
    name: "Mary Poppendieck",
    number: "39-23-6423122",
    id: 3,
  },
];

app.get("/persons", (request, response) => {
  response.json(persons);
});

app.get("/:id", (request, response) => {
  const id = request.params.id;
  console.log(id);
  const findPerson = persons.find((person) => person.id == id);
  response.json(findPerson);
});

app.post("/persons", (request, response) => {
  const addPerson = request.body;
  //console.log(addPerson);
  if (
    persons.reduce(
      (acc, person) => acc && person.name !== addPerson.name,
      true
    ) &&
    addPerson.name &&
    addPerson.number
  )
    response.json(addPerson);
  else
    response
      .status(400)
      .json({ error: "name already exists, or name or number undefined" });
});

app.delete("/:id", (request, response) => {
  const id = Number(request.params.id);
  persons = persons.filter((person) => person.id !== id);
  response.status(204).end();
});

app.get("/info", (request, response) => {
  response.send(
    `<h3>The phone book has ${persons.length} people </h3> \n ${Date()}`
  );
});

//app.post("/persons", (request, response) => {
//const person = request.body;
//console.log(person);
//response.json(person);
//});

const PORT = 3001;
app.listen(PORT);
console.log(`server running on port ${PORT}`);
