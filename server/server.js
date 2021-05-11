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
app.use(cors());

// routes
app.get("/api", (res, req) => {
  res.json({ time: Date.now().toString() });
});

app.listen(PORT, () => {
  console.log(`Express listening on ${PORT}`);
});
