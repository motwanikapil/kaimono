const Category = require("../models/category.model");

async function create(req, res) {
  try {
    const { name } = req.body;

    if (!name)
      return res.status(400).json({ message: "Category name is required" });

    await Category.create({ name });

    res.status(201).json({ message: "Category created successfully" });
  } catch (error) {
    console.log(error);
  }
}

async function read(req, res) {
  try {
    const categories = await Category.find({}).limit(10);
    res.status(200).json({ categories });
  } catch (error) {
    console.log(error);
  }
}

async function update(req, res) {
  try {
    const { id: categoryId } = req.params;
    if (!categoryId) {
      return res.status(400).json({ message: "Valid category id required" });
    }

    const res = await Category.findOneAndUpdate(
      { _id: categoryId },
      { $set: req.body },
    );

    res.status(200).json({ message: "Category updated successfully" });
  } catch (error) {
    console.log(error);
  }
}

async function remove(req, res) {
  try {
    const { id: categoryId } = req.params;
    if (!categoryId) {
      return res.status(400).json({ message: "Valid category id required" });
    }

    const res = await Category.findOneAndDelete({ _id: categoryId });

    res.status(200).json({ message: "Category deleted successfully" });
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  create,
  read,
  update,
  remove,
};
