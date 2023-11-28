const { Article } = require("../model/article");

const getHomepage = (req, res) => {
  Article.find()
    .then((result) => res.render("index", { result }))
    .catch((error) => console.log(error));
};

const submitArticle = (req, res) => {
  const article = new Article(req.body);
  article
    .save()
    .then((result) => res.redirect("/"))
    .catch((error) => console.log(error));
  console.log("I got the signal", req.body);
};

module.exports = {
  getHomepage,
  submitArticle,
};
