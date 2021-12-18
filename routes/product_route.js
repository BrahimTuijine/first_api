const express = require("express");
const getProduct = require("../logic/product");
const router = express.Router();

router.get("/", getProduct.getProducts);
router.post("/", getProduct.insertProduct);

module.exports = router;
