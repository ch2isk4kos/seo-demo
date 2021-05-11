const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const morgan = require("morgan");
const mongoose = require("mongoose");
require("dotenv").config(); // loads environment variables

// import routes
const blogRoutes = require("./routes/blog");

// environment variables
const PORT = process.env.PORT || 8000;
const DB = process.env.MONGO_ATLAS_URI;

// application initialization
const app = express();

// database
mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log("Connected to MongoDB Atlas");
  });

// middleware
app.use(morgan("dev")); // provides server information to the console
app.use(bodyParser.json());
app.use(cookieParser());
app.use(blogRoutes);

// whitelist requests from client side *** browser to browser communication ***
if (process.env.NODE_ENV === "development") {
  app.use(cors({ origin: `${process.env.CLIENT_URL}` }));
}

// routes
app.get("/api", (req, res) => {
  res.json({ time: Date().toString() });
});

// listens for `npm start`
app.listen(PORT, () => {
  console.log(`Express listening on ${PORT}`);
});
