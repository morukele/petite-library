const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const schema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
    unique: true,
    minlength: 4,
  },
  born: {
    type: Number,
  },
});

module.exports = mongoose.model("Author", schema);
