exports.home = (req, res) => {
  if (req.session.login) {
    res.render("index");
  } else {
    res.render("login");
  }
};

exports.add_user = (req, res) => {
  res.render("add_user");
};

exports.update_user = (req, res) => {
  res.render("update_user");
};

exports.create_user = (req, res) => {
  if (req.session.login) {
    res.redirect("/");
  } else {
    res.render("create_login");
  }
};
