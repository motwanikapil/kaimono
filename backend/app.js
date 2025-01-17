require("dotenv").config();
const { connectDb } = require("./utils/db");
const express = require("express");
const app = express();
const morgan = require("morgan");
const helmet = require("helmet");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const cors = require("cors");

const userRoutes = require("./routes/user.routes");
const cartRoutes = require("./routes/cart.routes");
const categoryRoutes = require("./routes/category.routes");
const orderRoutes = require("./routes/order.routes");
const productRoutes = require("./routes/product.routes");
const ratingRoutes = require("./routes/rating.routes");
const wishlistRoutes = require("./routes/wishlist.routes");
const contactUsRoutes = require("./routes/contactus.routes");
const errorMiddleware = require("./middlewares/error.middleware");
const addressRoutes = require("./routes/address.routes");

const {
  PORT,
  DOMAIN,
  SESS_SECRET,
  MAX_AGE,
  MONGODB_URL,
  COOKIE_NAME,
  IS_PROD,
  FRONTEND_URL,
} = process.env;

const store = MongoStore.create({ mongoUrl: MONGODB_URL });

app.use(helmet());
app.use(
  cors({
    origin: FRONTEND_URL,
  }),
);
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(morgan("dev"));

app.use(
  session({
    name: COOKIE_NAME,
    secret: SESS_SECRET,
    resave: true,
    saveUninitialized: false,
    store,
    cookie: {
      maxAge: +MAX_AGE,
      sameSite: false,
      secure: IS_PROD === "true",
    },
  }),
);

app.use("/user", userRoutes);
app.use("/cart", cartRoutes);
app.use("/category", categoryRoutes);
app.use("/order", orderRoutes);
app.use("/product", productRoutes);
app.use("/rating", ratingRoutes);
app.use("/wishlist", wishlistRoutes);
app.use("/address", addressRoutes);
app.use("/contactus", contactUsRoutes);

app.use(errorMiddleware);

connectDb()
  .then((res) => {
    console.log("Database connected successfully");
    app.listen(PORT, () => {
      console.log(`Server listening on http://${DOMAIN}:${PORT}`);
    });
  })
  .catch(console.log);
