// dataBase
const courses = require("../data/course-list.js");
const webDevHin = require("../data/web-dev-hin.js");


exports.root = (req, res) => {
  res.render("index", { courses: courses.courses })
}

exports.blog_get = (req, res) => {
  res.send("coming soon!")
}

exports.webDevCourse_get = (req, res) => {
  res.render("webDev", { htmlHindi: webDevHin.htmlHindi })
}

exports.webDevCourseVid_get = (req, res) => {
  res.render("video", { video: webDevHin.htmlHindi[req.params.id - 1] });
}
