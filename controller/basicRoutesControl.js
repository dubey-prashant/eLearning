const courses = require("../models/course-list")
const PlayList = require('../models/PlayList')

exports.root = (req, res) => {
  res.render("index", { courses: courses.courses })
}

exports.blog_get = (req, res) => {
  res.send("coming soon!")
}
exports.projects_get = (req, res) => {
  res.redirect("https://dubeytech1.herokuapp.com/")
}
exports.about_get = (req, res) => {
  res.redirect("https://dubeytech-prashant.github.io/cv")
}

exports.webDevCourse_get = (req, res) => {
  PlayList.find({}, (err, arrOF_PL) => {
    if (err) console.log(err)
    if (arrOF_PL) res.render("webDev", { webDev: arrOF_PL })
  })
}

exports.webDevCourseVid_get = (req, res) => {
  PlayList.findById(req.params.id, (err, pL) => {
    if (err) console.log(err)
    if (pL) res.render("video", { video: pL })
  })
}

exports.cppTuts_get = (req, res) => {
  res.render("cpp")
}
