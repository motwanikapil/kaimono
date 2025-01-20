const User = require("../models/user.model");

const LIMIT = 10;
const SKIP = 0;

async function signup(req, res) {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res.status(404).json({ message: "Some details are missing" });
    }

    let user = await User.findOne({ email });

    if (user) return res.status(400).json({ message: "User already exists" });

    user = await User.create(req.body);

    res.status(201).json({
      message: "registration successful",
    });
  } catch (error) {
    console.error(error);
  }
}

async function read(req, res) {
  try {
    const { limit, skip } = req.query;

    const users = await User.find({})
      .limit(limit ?? LIMIT)
      .skip(skip ?? SKIP);

    if (!users) {
      return res.status(404).json({ message: "users not found" });
    }

    res.status(200).json({ message: users });
  } catch (error) {}
}

async function readOne(req, res) {
  try {
    console.log(req.session);

    const { id: _id } = req.params;

    if (!_id) return res.status(400).json({ message: "Invalid id" });

    const user = await User.findOne({ _id });

    if (!user) {
      return res.status(404).json({ message: "user not found" });
    }

    res.status(200).json({ message: user });
  } catch (error) {
    console.error(error);
  }
}

async function login(req, res) {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res
        .status(400)
        .json({ success: false, message: "Email and password are required." });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User does not exist." });
    }

    const isPasswordValid = await user.comparePassword(password);
    if (!isPasswordValid) {
      return res
        .status(401)
        .json({ success: false, message: "Invalid credentials." });
    }

    // Set new session
    req.session.currentUser = {
      userId: user._id.toString(),
      role: user.role,
      email: user.email, // Store email for future checks
    };

    res.status(200).json({
      success: true,
      message: "Login successful.",
      user: { userId: user._id.toString(), role: user.role },
    });
  } catch (error) {
    console.error("Login error:", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error.",
    });
  }
}

async function logout(req, res) {
  if (!req.session.currentUser) {
    return res.status(400).json({ message: "User is not logged in" });
  } else {
    req.session.currentUser = null;
    req.session.save(console.error);
  }

  res.status(200).json({ message: "User logged out successfully" });
}

async function update(req, res) {
  try {
    const { id: _id } = req.params;
    const { name, email, password, address } = req.body;
    if (!email && !password && !name && !address) {
      return res.status(404).json({ message: "invalid details" });
    }

    let user;

    if (password) {
      user = await User.findOne({ _id });

      if (user) {
        const samePassword = user.comparePassword(password);
        return res
          .status(400)
          .json({ message: "Password is same as previous password" });
      }
    }

    user = await User.findOneAndUpdate({ _id }, { $set: req.body });

    if (!user) return res.status(400).json({ message: "User does not exists" });

    res.status(200).json({ message: "user updated successfully" });
  } catch (error) {
    console.error(error);
  }
}

async function remove(req, res) {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(404).json({ message: "invalid credentials" });
    }

    let user = await User.deleteOne({ email });

    if (!user) return res.status(400).json({ message: "User does not exists" });

    res.status(200).json({ message: "Logged in successfully" });
  } catch (error) {
    console.error(error);
  }
}

module.exports = {
  signup,
  login,
  update,
  remove,
  logout,
  read,
  readOne,
};
