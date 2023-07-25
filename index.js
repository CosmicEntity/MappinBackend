const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = express("./routes/pins.js");
const cors = require("cors");

const pinRoute = require("./routes/pins");
const userRoute = require("./routes/users");

dotenv.config();

app.use(express.json());
app.use(cors());

mongoose
  .connect(process.env.MONGODB_URL, { useNewUrlParser: true })
  .then(() => {
    console.log("MongoDB Connected");
  })
  .catch((err) => console.log(err));

app.use("/api/pins", pinRoute);
app.use("/api/users", userRoute);

app.listen(process.env.PORT || 8000, () => {
  console.log("Server is running");
});
