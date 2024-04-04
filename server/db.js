require("dotenv").config();
const mongoose = require("mongoose");

mongoose
  .connect(process.env.MONGO_DB)
  .then(() => console.log(`MongoDB connected 🧠`))
  .catch((err) => console.log(`Database not connected`, err));
