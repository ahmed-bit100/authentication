const express = require("express");
const {
  register,
  login,
  authorizedUser,
} = require("../controller/user.controller");
const isAuth = require("../middlewares/isAuth");
const { registerRules, validator } = require("../middlewares/validator");

const Router = express.Router();

Router.post("/register", registerRules(), validator, register);
Router.post("/login", login);
Router.get("/auth", isAuth, authorizedUser);

module.exports = Router;
