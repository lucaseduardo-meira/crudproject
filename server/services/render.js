const GestorController = require("../controller/GestorController");

// Login e home page
exports.login = (req, res) => {
  if (req.session.login) {
    res.redirect("/");
  } else {
    res.render("login");
  }
};

exports.home = (req, res) => {
  if (req.session.login) {
    const index = GestorController.find(req, res);
    console.log(index);
  } else {
    res.redirect("/login");
  }
};

exports.create_user = (req, res) => {
  if (req.session.login) {
    res.redirect("/");
  } else {
    res.render("create_login");
  }
};

// Create user to database
exports.add_user = (req, res) => {
  if (req.session.login) {
    res.render("add_user");
  } else {
    res.redirect("/");
  }
};

exports.update_user = (req, res) => {
  res.render("update_user");
};
