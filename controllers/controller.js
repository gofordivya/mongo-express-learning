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

const findArticle = (req, res) => {
  Article.findById({ _id: req.params.id })
    .then((result) => res.render("editArticle", { result }))
    .catch((rrr) => console.log(err));
};

const updateArticle = (req, res) => {
  Article.findByIdAndUpdate({ _id: req.params.id })
    .then((result) => {
      result.title = req.body.title;
      result.article = req.body.article;
      result
        .save()
        .then((resultUpdate) => res.redirect("/"))
        .catch((err) => console.log(err));
    })
    .catch((err) => console.log(err));
};

const deleteArticle = (req, res) => {
  Article.findByIdAndDelete({ _id: req.params.id })
    .then((result) => res.redirect("/"))
    .catch((rrr) => console.log(err));
};

module.exports = {
  getHomepage,
  submitArticle,
  findArticle,
  updateArticle,
  deleteArticle,
};
