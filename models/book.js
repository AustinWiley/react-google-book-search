
/////////////////////////////////////////////// /* Imports */ //////////////////////////////////////////////////////////
const mongoose = require("mongoose");

/////////////////////////////////////////////// /* Initialize */ //////////////////////////////////////////////////////////
const Schema = mongoose.Schema;

/////////////////////////////////////////////// /* Article Schema */ //////////////////////////////////////////////////////////
const bookSchema = new Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    link: { type: String, required: true },
    date: { type: Date, default: Date.now }
  });
  
  const Book = mongoose.model("Book", bookSchema); // This creates our model from the above schema, using mongoose's model method

/////////////////////////////////////////////// /* Export */ //////////////////////////////////////////////////////////
module.exports = Book;