const Order = require("../models/order.model");

const LIMIT = 10;
const SKIP = 0;

async function create(req, res) {
  try {
    const { user, product, shippingStatus, paymentType } = req.body;

    const order = await Order.create({
      user,
      product,
      shippingStatus,
      paymentType,
    });

    if (!order) {
      return res.status(400).json({ message: "Order creation failed" });
    }

    res.status(200).json({
      message: "Order created successfully",
      orderId: order._id.toString(),
    });
  } catch (error) {
    console.error(error);
  }
}

async function readOne(req, res) {
  try {
    const { _id } = req.params;

    if (!_id) {
      return res.status(400).json({
        message: "Invalid order id",
      });
    }

    const order = await Order.findOne({ _id });

    if (!order) {
      return res.status(404).json({
        message: "Order not found",
      });
    }

    res.status(200).json({ message: order });
  } catch (error) {
    console.error(error);
  }
}

async function read(req, res) {
  try {
    const { limit, skip } = req.body;

    const orders = await Order.find({})
      .limit(limit ?? LIMIT)
      .skip(skip ?? SKIP);
  } catch (error) {
    console.error(error);
  }
}

async function update(req, res) {
  try {
  } catch (error) {
    console.error(error);
  }
}

async function remove(req, res) {
  try {
    const { _id } = req.params;

    if (!_id) {
      return res.status(400).json({
        message: "Invalid order id",
      });
    }

    const order = await Order.findOneAndDelete({ _id });

    if (!order) {
      return res.status(404).json({
        message: "Order not found",
      });
    }

    res.status(200).json({ message: "order deleted successfully" });
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
