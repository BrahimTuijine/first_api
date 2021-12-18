const mongoose = require("mongoose");

const product = mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  lastname: String,
  age: Number,
});

module.exports = mongoose.model("PRODUCTS" , product);
