const PRODUCTS = require("../model/product_model");

module.exports = {
  getProducts: async (req, res, next) => {
    const product = await PRODUCTS.find();
    res.json({
      result: product.map((res) => {
        return {
          id: res.id,
          name: res.name,
          lastname: res.lastname,
        };
      }),
    });
  },

  insertProduct: async (req, res) => {
    const product = await new PRODUCTS({
      name: req.body.name,
      lastname: req.body.lastname,
      age: req.body.age,
    }).save();

    res.json({
      message: "inserted successfully",
      id: product.id,
      name: product.name,
    });
  },

  deleteProduct: async (req, res) => {
    id = req.params.id;
    const del = await PRODUCTS.findByIdAndDelete(id);
    res.json({
      "message": del,
    });
  },
};
