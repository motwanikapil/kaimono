const Product = require("../models/product.model");

const LIMIT = 10;
const SKIP = 0;

async function create(req, res) {
  try {
    const { name, description, price, category, images, stock } = req.body;

    const product = await Product.create({
      name,
      description,
      price,
      category,
      images,
      stock,
    });

    res.status(200).json({ message: "Product created successfully" });
  } catch (error) {
    console.error(error);
  }
}

async function read(req, res) {
  try {
    const { limit, skip } = req.body;
    const products = await Product.find({})
      .limit(limit ?? LIMIT)
      .skip(skip ?? SKIP);
    res.status(200).json({ products });
  } catch (error) {
    console.error(error);
  }
}

async function readOne(req, res) {
  try {
    const { _id } = req.params;
    const product = await Product.findOne({ _id });

    if (!product) return res.status(404).json({ message: "Product not found" });

    res.status(200).json({ message: product });
  } catch (error) {
    console.error(error);
  }
}

async function update(req, res) {
  try {
    const { id: _id } = req.params;
    const product = await Product.findOneAndUpdate({ _id }, { $set: req.body });

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json({ message: "Product updated successfully" });
  } catch (error) {
    console.error(error);
  }
}

async function remove(req, res) {
  try {
    const { id } = req.params;
    const product = await Product.findOneAndDelete({ _id: id });

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json({ message: "Product Deleted Successfully" });
  } catch (error) {
    console.error(error);
  }
}

module.exports = {
  create,
  read,
  update,
  remove,
  readOne,
};
