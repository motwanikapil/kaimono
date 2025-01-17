const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  products: [
    {
      id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
      },
      quantity: {
        type: Number,
        min: 1,
      },
    },
  ],
  shippingStatus: {
    type: String,
    enum: ["NEW", "IN TRANSIT", "DELIVERED"],
    required: true,
    default: "NEW",
  },
  paymentType: {
    type: String,
    enum: ["CASH_ON_DELIVERY", "UPI", "CARD"],
    required: true,
    default: "CASH_ON_DELIVERY",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Order", orderSchema);
