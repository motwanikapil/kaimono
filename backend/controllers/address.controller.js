const Address = require("../models/address.model");

async function create(req, res) {
  try {
    const { phone = "", companyName = "", address = "" } = req.body;

    const addressCreated = await Address.create({
      phone,
      companyName,
      address,
    });

    if (!addressCreated) {
      return res.status(400).json({ message: "Address created failed" });
    }

    res.status(200).json({ message: "Address created successfully" });
  } catch (error) {
    console.error(error);
  }
}

async function readOne(req, res) {
  try {
    const { id: userId } = req.params;

    const address = await Address.findOne({ user: userId });

    if (!address) {
      return res.status(404).json({ message: "Address not found" });
    }

    return res.status(200).json({ message: address });
  } catch (error) {
    console.error(error);
  }
}

async function update(req, res) {
  try {
    const { id: userId } = req.params;

    const address = await Address.findOneAndUpdate(
      { user: userId },
      { $set: req.body },
    );

    if (!address) {
      return res.status(404).json({ message: "Address not found" });
    }

    return res.status(200).json({ message: "Address updated successfuly" });
  } catch (error) {
    console.error(error);
  }
}

async function remove(req, res) {
  try {
    const { id: userId } = req.params;

    const address = await Address.findOneAndDelete({ user: userId });

    if (!address) {
      return res.status(404).json({ message: "Address not found" });
    }

    return res.status(200).json({ message: "Address deleted successfully" });
  } catch (error) {
    console.error(error);
  }
}

module.exports = {
  create,
  readOne,
  update,
  remove,
};
