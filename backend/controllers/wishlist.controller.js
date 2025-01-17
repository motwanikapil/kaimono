const Wishlist = require("../models/wishlist.model");

const LIMIT = 10;
const SKIP = 0;

async function create(req, res) {
  try {
    const { user, products } = req.body;

    const wishlist = await Wishlist.create({
      user,
      products,
    });

    if (!wishlist) {
      return res.status(400).json({ message: "wishlist creation failed" });
    }

    res.status(200).json({
      message: "wishlist created successfully",
    });
  } catch (error) {
    console.error(error);
  }
}

async function readOne(req, res) {
  try {
    const { id: _id } = req.params;

    if (!_id) {
      return res.status(400).json({
        message: "Invalid wishitem id",
      });
    }

    const wishlist = await wishlist.findOne({
      _id,
      user: req.session.currentUser.userId,
    });

    if (!wishlist) {
      return res.status(404).json({
        message: "wishlist not found",
      });
    }

    res.status(200).json({ message: wishlist });
  } catch (error) {
    console.error(error);
  }
}

async function read(req, res) {
  try {
    const { limit, skip } = req.body;

    const wishlists = await Wishlist.find({})
      .limit(limit ?? LIMIT)
      .skip(skip ?? SKIP);

    res.status(200).json({ message: wishlists });
  } catch (error) {
    console.error(error);
  }
}

async function update(req, res) {
  try {
    const { id: _id } = req.params;
    const { products } = req.body;
    const wishlist = await Wishlist.findOneAndUpdate(
      { _id },
      { $push: { $each: products } },
    );

    if (!wishlist) {
      return res.status(400).json({ message: "wishlist updation failed" });
    }

    res.status(200).json({ message: "wishlist updated successfully" });
  } catch (error) {
    console.error(error);
  }
}

async function removeItems(req, res) {
  try {
    const { id: _id } = req.params;
    const { products } = req.body;
    const wishlist = await Wishlist.findOneAndUpdate(
      { _id },
      { $pull: { products: { $in: products } } },
    );

    if (!wishlist) {
      return res.status(400).json({ message: "wishlist updation failed" });
    }

    res.status(200).json({ message: "wishlist updated successfully" });
  } catch (error) {
    console.error(error);
  }
}

async function remove(req, res) {
  try {
    const { id: _id } = req.params;

    if (!_id) {
      return res.status(400).json({
        message: "Invalid wishlist id",
      });
    }

    const wishlist = await wishlist.findOneAndDelete({ _id });

    if (!wishlist) {
      return res.status(404).json({
        message: "wishlist not found",
      });
    }

    res.status(200).json({ message: "wishlist deleted successfully" });
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
  removeItems,
};
