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
};

const deleteArticle = (req, res) => {
  Article.findByIdAndDelete({ _id: req.params.id })
    .then((result) => res.redirect("/"))
    .catch((rrr) => console.log(err));
};

module.exports = {
  getHomepage,
  submitArticle,
  deleteArticle,
};
