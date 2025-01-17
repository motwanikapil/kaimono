const Rating = require("../models/rating.model");

const LIMIT = 5;
const SKIP = 0;

async function create(req, res) {
  try {
    const { user, product, count, comment } = req.body;

    const rating = await Product.create({ user, product, count, comment });

    if (!rating)
      return res.status(400).json({ message: "rating creation failed" });

    res.status(200).json({ message: "rating created successfully" });
  } catch (error) {
    console.error(error);
  }
}
async function read(req, res) {
  try {
    const { id } = req.params;
    const { limit, skip } = req.query;

    const ratings = await Rating.find({ product: id })
      .limit(limit ?? LIMIT)
      .skip(skip ?? SKIP);

    if (!ratings) return res.status(404).json({ message: "Ratings not found" });

    res.status(200).json({ message: ratings });
  } catch (error) {
    console.error(error);
  }
}
async function remove(req, res) {
  try {
    const { user, product } = req.body;

    if (!user || !product) {
      return res
        .status(400)
        .json({ message: "User id or product id is not found" });
    }

    res.status(200).json({ message: "Rating removed successfully" });
  } catch (error) {
    console.error(error);
  }
}

module.exports = {
  create,
  read,
  remove,
};
