const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const morgan = require("morgan");
const mongoose = require("mongoose");
require("dotenv").config(); // loads environment variables

// import routes
const blogRoutes = require("./routes/blog");
const authRoutes = require("./routes/auth");

// environment variables
const PORT = process.env.PORT || 8000;
const DB = process.env.MONGO_ATLAS_URI;

// application initialization
const app = express();

// database
mongoose
  .connect(DB, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log("Connected to MongoDB Atlas");
  });

// whitelist requests from client side *** browser to browser communication ***
// if (process.env.NODE_ENV === "development") {
//   app.use(cors({ origin: `${process.env.CLIENT_URL}` }));
// }

// bug fix:
// error -> Response to preflight request doesn't pass access control check: No 'Access-Control-Allow-Origin' header is present on the requested resource. If an opaque response serves your needs, set the request's mode to 'no-cors' to fetch the resource with CORS disabled.
// commented the above and applied the following two lines:
app.use(cors());
app.options(`${process.env.CLIENT_URL}`, cors());

// middleware
app.use(morgan("dev")); // provides server information to the console
app.use(bodyParser.json());
app.use(cookieParser());
app.use("/api", blogRoutes);
app.use("/api", authRoutes);

// listens for `npm start`
app.listen(PORT, () => {
  console.log(`Express listening on ${PORT}`);
});
