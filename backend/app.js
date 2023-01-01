const express = require("express");
const bodyParser = require("body-parser");

const productRoutes = require("./routes/product_routes.js");
const userRoutes = require("./routes/user_routes");
const HttpError = require("./models/http-error.js");

const app = express();

app.use(bodyParser.json());

app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);

app.use((req, res, next) => {
  const error = new HttpError("Could not find this route", 404);
  throw error;
});

app.use((error, req, res, next) => {
  if (res.headerSent) {
    return next(error);
  }

  res.status(error.code || 500);
  res.json({ message: error.message || "An unknown error" });
});

app.listen(8000);