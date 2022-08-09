const User = require("../model/User");
const { login } = require("../services/render");
const services = require("../services/render");
const session = require("express-session");
const GestorController = require("./GestorController");
const { NONE } = require("sequelize");

module.exports = {
  async login(req, res) {
    const { name, password } = req.body;
    // Verify if name already exists
    const find_name = User.findAll({
      where: {
        name: name,
      },
    });
    if ((await find_name).length < 1) {
      return console.log("usuario não existe");
    }
    const find_user = await User.findAll({
      where: {
        name: name,
        password: password,
      },
    });

    if ((await find_user).length === 1) {
      //LOGAR USER
      req.session.login = name;
    } else {
      return res.status(400).json({ error: "user not found" });
    }
    res.redirect("/");
  },
  async create(req, res) {
    const { name, password } = req.body;
    const find_name = User.findAll({
      where: {
        name: name,
      },
    });
    if ((await find_name).length > 0) {
      return console.log("Usuario já existe");
    } else {
      const user = await User.create({ name, password });
      const find_user = await User.findAll({
        where: {
          name: name,
          password: password,
        },
      });
      req.session.login = name;
    }
  },
  async logout(req, res) {
    req.session.login = null;
    res.sendStatus(200);
  },
};
