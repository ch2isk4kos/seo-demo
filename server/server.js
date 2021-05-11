const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const morgan = require("morgan");
require("dotenv").config(); // loads environment variables

// application initialization
const app = express();

// middleware
app.use(morgan("dev")); // provides server information to the console
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());
