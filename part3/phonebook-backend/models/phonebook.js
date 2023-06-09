const mongoose = require('mongoose')

const url =
    'mongodb+srv://amar:sony@cluster1.rzihhwf.mongodb.net/?retryWrites=true&w=majority'

console.log('connecting to', url)

mongoose.connect(url)
    .then(result => {
        console.log('connected to MongoDB')
    })
    .catch((error) => {
        console.log('error connecting to MongoDB:', error.message)
    })

const personSchema = new mongoose.Schema({
    name: String,
    number: String,
})

// phoneSchema.set('toJSON', {
//     transform: (document, returnedObject) => {
//         returnedObject.id = returnedObject._id.toString()
//         delete returnedObject._id
//         delete returnedObject.__v
//     }
// })

const Person = mongoose.model("Person", personSchema)
module.exports = Person


