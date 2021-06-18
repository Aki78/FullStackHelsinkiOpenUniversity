const mongoose = require("mongoose");

if (
  process.argv.length < 3 ||
  process.argv.length == 4 ||
  process.argv.length > 5
) {
  console.log(
    "Please provide the password as an argument: node mongo.js <password> or add <password> + name + phone number in the same order"
  );
  process.exit(1);
}

const password = process.argv[2];
const addName = process.argv[3];
const addNumber = process.argv[4];

const url = `mongodb+srv://aki_user_123:${password}@cluster0.dyqgq.mongodb.net/notesApp?retryWrites=true&w=majority`;

mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
});

const phoneSchema = new mongoose.Schema({
  name: String,
  number: String,
});

const phoneBook = mongoose.model("phoneBook", phoneSchema);

if (process.argv.length == 5) {
  const entryData = new phoneBook({
    name: process.argv[3],
    number: process.argv[4],
  });
  entryData.save().then((result) => {
    console.log("phone book added entry!");
    mongoose.connection.close();
  });
} else if (process.argv.length < 4) {
  phoneBook.find().then((result) => {
    result.map((eachEntry) => {
      console.log(eachEntry);
    });
    mongoose.connection.close();
  });
}
