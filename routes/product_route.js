const express = require("express");
const Product = require("../logic/product");
const router = express.Router();

router.get("/", Product.getProducts);
router.post("/", Product.insertProduct);
router.delete("/:id" , Product.deleteProduct)

module.exports = router;
