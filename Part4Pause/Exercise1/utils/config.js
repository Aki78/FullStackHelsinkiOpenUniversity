require('dotenv').config()

let PORT = process.env.PORT
let MONGODB_URI = process.env.MONGODB_URI

console.log("URIRUIRUIRUI", MONGODB_URI)

module.exports = {
  MONGODB_URI,
  PORT
}
