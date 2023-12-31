const express = require("express");
const router = express.Router();
const controller = require("../controllers/controller");

router.get("/", controller.getHomepage);

router.post("/submit-article", controller.submitArticle);

router.get("/edit-article/:id", controller.findArticle);

router.post("/update-article/:id", controller.updateArticle);

router.get("/delete/:id", controller.deleteArticle);

module.exports = router;
