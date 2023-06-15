const mongoose = require('mongoose');

const MONGO_URI = "mongodb+srv://elinor:tiLPIWWh509ml42X@cluster0.iaqd8uz.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(MONGO_URI, {
    // options for the connect method to parse the URI
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // sets the name of the DB that our collections are part of
    dbName: 'Library'
  })
    .then(() => console.log('Connected to Mongo DB.'))
    .catch(err => console.log(err));

const Schema = mongoose.Schema;

const librarySchema = new Schema({
  title: String,
  authors: String,
  thumbnail: String,
});

const Library = mongoose.model('library', librarySchema);

module.exports = { Library };