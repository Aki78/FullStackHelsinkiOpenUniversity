const mongoose = require('mongoose')

if (process.argv.length < 3) {
  console.log('Please provide the password as an argument: node mongo.js <password>')
  process.exit(1)
}

const password = process.argv[2]

const url = `mongodb+srv://aki_user_123:${password}@cluster0.dyqgq.mongodb.net/notesApp?retryWrites=true&w=majority`

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })

const notesSchema = new mongoose.Schema({
  content: String,
  date: Date,
  important: Boolean,
})

const Notes = mongoose.model('Notes', notesSchema)

const notes = new Notes({
  content: 'HTML is Easy',
  date: new Date(),
  important: true,
})

notes.save().then(result => {
  console.log('notes saved!')
  mongoose.connection.close()
})


Notes.find({important: true}).then(result => {
  result.map(note => {
    console.log(note)
  })
  mongoose.connection.close()
})
