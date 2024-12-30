// // const jwt = require("jsonwebtoken");
// // const User = require("../models/user-model");

// // const authMiddleware = async (req, res, next) => {
// //   const token = req.header("Authorization");

// //   if (!token) {
// //     return res
// //       .status(401)
// //       .json({ message: "Unauthorized HTTP, Token not provided" });
// //   }

// //   const jwtToken = token.replace("Bearer", "").trim();
// //   console.log("token from auth middleware ", jwtToken);

// //   try {
// //     const isVerified = jwt.verify(jwtToken, process.env.JWT_SECRET_KEY);

// //     const userData = await User.findOne({ email: isVerified.email }).select({
// //       password: 0,
// //     });

// //     console.log(userData);

// //     req.user = userData;
// //     req.token = token;
// //     req.userId = userData._id;

// //     next();
// //   } catch (error) {
// //     console.log("Error from auth middleware ", error);
// //     next(error);
// //   }
// // };

// const jwt = require("jsonwebtoken");
// const User = require("../models/user.model");

// const isLoggedIn = (req, res, next) => {
//   console.log("auth middleware : ");
//   console.dir(req.session);
//   if (req.session.currentUser) {
//     return res
//       .status(400)
//       .json({ success: false, message: "User is already logged in." });
//   }
//   next();
// };

// module.exports = { isLoggedIn };

const isLoggedIn = (req, res, next) => {
  console.log("auth middleware : ");
  console.dir(req.session);

  if (req.session.currentUser) {
    if (req.body.email === req.session.currentUser.email) {
      return res
        .status(400)
        .json({ success: false, message: "User is already logged in." });
    } else {
      req.session.currentUser = null;
    }
  }

  next();
};

function isAdmin(req, res, next) {
  if (!req.session.currentUser) {
    return res.status(400).json({ message: "User is not logged in" });
  }

  if (!req.session.currentUser.role === "admin") {
    return res.status(403).json({ message: "Forbidden" });
  }

  next();
}

module.exports = { isLoggedIn, isAdmin };
