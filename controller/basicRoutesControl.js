// dataBase
const courses = require("../data/course-list.js");
const webDev = require("../data/webDev.js");


exports.root = (req, res) => {
  res.render("index", { courses: courses.courses })
}

exports.blog_get = (req, res) => {
  res.send("coming soon!")
}

exports.webDevCourse_get = (req, res) => {
  res.render("webDev", { webDev: webDev.webDev })
}

exports.webDevCourseVid_get = (req, res) => {
  res.render("video", { video: webDev.webDev[req.params.id - 1] });
}

exports.cppTuts_get = (req, res) => {
  res.render("cpp")
}
