const { Router } = require('express')
const routeControl = require('../controller/basicRoutesControl')

const routes = Router()

routes.get("/", routeControl.root)

routes.get("/blog", routeControl.blog_get)

routes.get("/web-dev-course", routeControl.webDevCourse_get)

routes.get("/web-dev-course/:id", routeControl.webDevCourseVid_get)

routes.get("/cpp", routeControl.cppTuts_get)

module.exports = routes