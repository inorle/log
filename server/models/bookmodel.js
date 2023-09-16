const mongoose = require('mongoose');
require("dotenv").config();

const MONGO_URI = process.env.DATABASE_URL;

mongoose.connect(MONGO_URI, {
    // options for the connect method to parse the URI
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // sets the name of the DB that our collections are part of
    dbName: 'library'
  })
    .then(() => console.log('Connected to Mongo DB.'))
    .catch(err => console.log(err));

const Schema = mongoose.Schema;

const librarySchema = new Schema({
  title: String,
  authors: String,
  thumbnail: { type: String, default: 'https://www.pngarts.com/files/8/Blank-Book-Cover-PNG-Picture.png'},
});

const Library = mongoose.model('library', librarySchema);

module.exports = { Library };