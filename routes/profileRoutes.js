const mongoose = require('mongoose')
const requireLogin = require('../middlewares/requireLogin')

const Profile = mongoose.model('profiles')

module.exports = app => {
  app.post('/api/profiles', requireLogin, (req, res) => {
    const { firstName, title, company, recipients } = req.body 

    const profile = new Profile({
      firstName,
      title,
      company,
      _user: req.user.id
    })


  })
}