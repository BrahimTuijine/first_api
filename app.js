const express = require("express");
const productRoute = require("./routes/product_route");
const app = express();
const mongoose = require("mongoose");
const port = 3020;
var bodyParser = require("body-parser");

// connect to mongo atlas
mongoose.connect(
  "mongodb+srv://sanfour:sanfour123@cluster0.ounoz.mongodb.net/myFirstDataB?retryWrites=true&w=majority"
);

// test connection
const connection = mongoose.connection;
connection.on("connected", () => {
  console.log("connect with db is mrigel");
});
connection.on("error", () => {
  console.log("famma mouchkel allah 4aleb !!");
});
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// requests
app.use("/test", productRoute);


// open local server
app.listen(port, () => {
  console.log("server running !!");
});

module.exports = app;
