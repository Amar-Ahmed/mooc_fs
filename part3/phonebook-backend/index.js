const express = require("express")
const app = express()
const morgan = require('morgan');
const cors = require('cors')
const mongoose = require('mongoose')
const Person = require("./models/phonebook")



function logger(req, res, next) {
  console.log(`${req.method} ${req.url}`);
  console.log(`REQ content: ${req.body.name}`);
  next();
}
app.use(cors())
app.use(express.static('build'))
app.use(express.json())
app.use(cors())
app.use(morgan('combined'));

let persons = [
  {
    name: "Arto Hellas",
    number: "040-123456",
    id: 1,
  },
  {
    name: "Ada Lovelace",
    number: "39-44-5323523",
    id: 2,
  },
  {
    name: "Dan Abramov",
    number: "12-43-234345",
    id: 3,
  },
  {
    name: "Mary Poppendieck",
    number: "39-23-6423122",
    id: 4,
  },
  {
    name: "Edward Tivruski",
    number: "021-2142142142",
    id: 5,
  },
]

app.get("/api/persons", (req, res) => {
  Person.find({}).then(result => {
    res.json(result)
  })
})

app.get("/api/person/:id", (req, res) => {
  console.log(typeof req.params.id)
  console.log(persons.find(person => {
    return person.id === Number(req.params.id)
  }))

  res.json(persons.find(person => {
    return person.id === Number(req.params.id)
  }))
})

app.post("/api/persons",  (req, res) => {
  //console.log(req.body.content)
  //console.log(Phonebook.)
  const data = new Person(req.body)
  console.log(data)
  console.log(Person)
  // Person.save.then(result => {
  //   res.json(result)
  // })
  //persons.push(req.body)

  try {
    const student =  Person.create(req.body);
    res.status(201).json({
      student
    });
  } catch (error) {
    return error;
  }
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
