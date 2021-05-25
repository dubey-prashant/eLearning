const mongoose = require('mongoose')

const playListSchema = new mongoose.Schema({
  name: String,
  style: String,
  url: String
})
const PlayList = new mongoose.model('playlist', playListSchema)
module.exports = PlayList