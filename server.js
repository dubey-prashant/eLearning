const express = require("express");
const ejs = require("ejs");
const bodyParser = require("body-parser");
const basicRoutes = require("./routes/basicRoutes");
const app = express();

app.set("view engine", 'ejs');
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.use(basicRoutes)

app.listen(process.env.PORT || 3000, () => console.log("Working Boss!"));