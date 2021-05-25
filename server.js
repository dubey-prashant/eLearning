if (process.env.NODE_ENV !== 'production') require('dotenv').config()
const express = require("express")
const mongoose = require('mongoose')
const basicRoutes = require("./routes/basicRoutes")
const adminRoute = require("./routes/admin")
const app = express();

// connect mongo-db
mongoose.connect(process.env.MONGO_DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
}).then(app.listen(process.env.PORT, () => console.log("Working Boss!")))
  .catch(err => console.log(err))
// connection to mongo end

app.set("view engine", 'ejs');
app.use(express.static("public"));
app.use(express.json())

app.use(basicRoutes)
app.use(adminRoute)