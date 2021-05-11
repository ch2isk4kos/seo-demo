const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const morgan = require("morgan");
require("dotenv").config(); // loads environment variables

// environment variables
const PORT = process.env.PORT || 8000;

// application initialization
const app = express();

// middleware
app.use(morgan("dev")); // provides server information to the console
app.use(bodyParser.json());
app.use(cookieParser());

// whitelist requests from client side
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
