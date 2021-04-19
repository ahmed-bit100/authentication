const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: String,
  phoneNumber: String,
  password: String,
});

module.exports = mongoose.model("User", userSchema);
