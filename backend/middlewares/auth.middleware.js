const isLoggedIn = (req, res, next) => {
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

function isUserLoggedIn(req, res, next) {
  if (!req.session.currentUser)
    return res.status(400).json({ message: "User is not logged in" });

  next();
}

function isAdmin(req, res, next) {
  if (!req.session.currentUser) {
    return res.status(400).json({ message: "User is not logged in" });
  }

  console.log();

  if (!(req.session.currentUser.role === "admin")) {
    return res.status(403).json({ message: "Forbidden" });
  }

  next();
}

module.exports = { isLoggedIn, isAdmin, isUserLoggedIn };
