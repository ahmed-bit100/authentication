const express = require("express");
const connectDB = require("./config/connectDB");
const user = require("./routes/user");
const app = express();
app.use(express.json());

app.use("/user", user);
connectDB();
const PORT = process.env.PORT || 5000;

app.listen(PORT, (err) =>
  err ? console.error(err) : console.log(`Server is running on port ${PORT}`)
);
