require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");

// middlware
app.use(express.json());
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
