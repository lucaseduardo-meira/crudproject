const express = require("express");
const route = express.Router();

const services = require("../services/render");

/**
 * @description Home page
 * @method GET /
 */

route.get("/", services.homeRoutes);

/**
 * @description add users
 * @method GET /add-users
 */

route.get("/add-user", services.add_user);
/**
 * @description update users
 * @method GET /update-users
 */

route.get("/update-user", services.update_user);

module.exports = route;
