const router = require('express').Router()
const PlayList = require('../models/playList')

router.post('/admin/add-pl', (req, res) => {
  const rB = req.body
  if (rB.id === process.env.ADMIN_ID
    && rB.pass === process.env.ADMIN_PASS) {
    PlayList.create({
      name: rB.name,
      style: rB.style,
      url: rB.url
    }).then((pl) => {
      res.status(200).send(pl)
    })
  }
  else {
    res.send('Authentication Error')
  }
})

module.exports = router