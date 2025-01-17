const mongoose = require("mongoose");

const MyString = {
  type: String,
  required: true,
  trim: true,
  minLength: 1,
};

const addressSchema = new mongoose.Schema({
  phone: {
    type: String,
    required: true,
    minLength: 10,
    maxLength: 10,
    trim: true,
  },
  companyName: MyString,
  address: {
    streetAddress: MyString,
    apartment: String,
    city: MyString,
  },
});

module.exports = mongoose.model("Address", addressSchema);
