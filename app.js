const express = require("express");
const productRoute = require("./routes/product_route");
const app = express();
const mongoose = require("mongoose");
var bodyParser = require("body-parser");
const cors = require("cors")
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
app.use(cors())

// open local server
const port = process.env.PORT || 8080
app.listen(port, () => {
  console.log("server running !!");
});

module.exports = app;
