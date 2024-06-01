require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express");
const app = express();
const cors = require("cors");

// mongoose
mongoose
  .connect(process.env.MONGO_DB)
  .then(() => console.log(`MongoDB connected 🧠`))
  .catch((err) => console.log(`Database not connected`, err));


// middlware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(
  cors({
    credentials: true,
    origin: process.env.ORIGIN,
  })
);

//routes
app.use("/api/docs", require("./routes/index"));

app.listen(process.env.PORT, (req, res) => {
  console.log(`Server is running on port ${process.env.PORT}`);
});

// /api/docs/random 