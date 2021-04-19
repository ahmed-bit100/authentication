const mongoose = require("mongoose");
const config = require("config");

const database = config.get("database");

const connectDB = async () => {
  try {
    await mongoose.connect(database, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("database connected...");
  } catch (error) {
    console.error(error);
  }
};

module.exports = connectDB;
