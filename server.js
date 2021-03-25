const express = require("express");
const ejs = require("ejs");
const bodyParser = require("body-parser");
const app = express();
// dataBase
const courses = require("./data/course-list.js");
const webDevCourse = require("./data/web-dev.js");

app.set("view engine", 'ejs');
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req, res)=>{
  res.render("index", {courses: courses.courses});
});
app.get("/web-dev-course", (req, res) =>{
  res.render("webDev", {htmlHindi: webDevCourse.htmlHindi});
});
app.get("/web-dev-course/:id", (req, res) => {
  res.render("video", {video: webDevCourse.htmlHindi[req.params.id-1]});
});
app.listen(process.env.PORT || 3000, () => {
  console.log("Working Boss!");
});
