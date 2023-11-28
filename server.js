const express = require("express");
const app = express();
const router = require("./config/router");
app.set(express.static("public"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
//require mongoose
require("./config/mongoose");

//requitre router
app.use(router);

app.listen(3000);
