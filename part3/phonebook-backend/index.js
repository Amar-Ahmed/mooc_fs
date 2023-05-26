const express = require("express")
const app = express()
const morgan = require('morgan');
const cors = require('cors')


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
  res.json(persons)
})

app.get("/api/person/:id", (req, res) => {
  console.log(typeof req.params.id)
  console.log(  persons.find(person=>{
    return person.id === Number(req.params.id)
  }))

  res.json(persons.find(person=>{
    return person.id === Number(req.params.id)
  }))
})

app.post("/api/persons", (req, res) =>{
  //console.log(req.body.content)
  persons.push(req.body)
  res.json(persons)

})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
