const User = require("../models/user.model");

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

// async function login(req, res) {
//   try {
//     const { email, password } = req.body;
//     if (!email || !password) {
//       return res.status(404).json({ message: "invalid credentials" });
//     }

//     let user = await User.findOne({ email });

//     if (!user) return res.status(400).json({ message: "User does not exists" });

//     const userAuthenticated = await user.comparePassword(password);

//     if (!userAuthenticated)
//       return res.status(400).json({ message: "Invalid credentials" });

//     console.log(req.session);

//     if (
//       req.session.currentUser &&
//       req.session.currentUser._id.toString() === user._id.toString()
//     ) {
//       return res.status(400).json({ message: "Already logged in" });
//     }

//     req.session.currentUser = {
//       role: user.role,
//       _id: user._id,
//     };

//     res.status(200).json({
//       message: "login successful",
//       userId: user._id.toString(),
//     });
//   } catch (error) {
//     console.error(error);
//   }
// }

// async function login(req, res) {
//   try {
//     const { email, password } = req.body;

//     if (!email || !password) {
//       return res
//         .status(400)
//         .json({ success: false, message: "Email and password are required." });
//     }

//     const user = await User.findOne({ email });
//     if (!user) {
//       return res
//         .status(404)
//         .json({ success: false, message: "User does not exist." });
//     }

//     const isPasswordValid = await user.comparePassword(password);
//     if (!isPasswordValid) {
//       return res
//         .status(401)
//         .json({ success: false, message: "Invalid credentials." });
//     }

//     // Set new session
//     req.session.currentUser = {
//       userId: user._id.toString(),
//       role: user.role,
//     };

//     res.status(200).json({
//       success: true,
//       message: "Login successful.",
//       user: { userId: user._id.toString(), role: user.role },
//     });
//   } catch (error) {
//     console.error("Login error:", error);
//     return res.status(500).json({
//       success: false,
//       message: "Internal server error.",
//     });
//   }
// }

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
  console.log(req.session);
  if (!req.session.currentUser) {
    return res.status(400).json({ message: "User is not logged in" });
  }

  req.session.currentUser = null;

  res.status(200).json({ message: "User logged out successfully" });
}

async function update(req, res) {
  try {
    const { name, email, password } = req.body;
    if (!email || !password) {
      return res.status(404).json({ message: "invalid credentials" });
    }

    let user = await User.findOneAndUpdate({ email }, { $set: req.body });

    if (!user) return res.status(400).json({ message: "User does not exists" });

    res.status(200).json({ message: "Logged in successfully" });
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
};
