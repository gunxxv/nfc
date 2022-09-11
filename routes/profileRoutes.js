const _ = require('lodash')
const { Path } = require('path-parser')
const { URL } = require('url')
const mongoose = require('mongoose')
const requireLogin = require('../middlewares/requireLogin')
const profileTemplate = require('../services/cardsTemplates/profileTemplate')

const Profile = mongoose.model('profiles')

module.exports = (app) => {

  app.get('/api/profiles/thanks', (req, res) => {
    res.send('Thanks for voting!')
  })

  app.post('/api/profiles/webhooks', (req, res) => {
    const events = _.map(req.body, (event) => {
      const pathname = new URL(event.url).pathname
      const p = new Path('/api/profiles/:profileId/:choice')
      console.log(p.test(pathname))
    })
    // res.send(req.body)
  })

  app.post('/api/profiles', requireLogin, async (req, res) => {
    const { input_name, input_name_en, company_name, company_name_en, title, title_en, address, address_en,location, email1,email2,website, line, tel1, tel2, tel3, facebook, instagram, tiktok, whatsapp, linkedIn, logo, avatar } = req.body;

    const profile = new Profile({
      input_name,
      input_name_en,
      company_name,
      company_name_en,
      title,
      title_en,
      address,
      address_en,
      location,
      email1,
      email2,
      website,
      line,
      tel1,
      tel2,
      tel3,
      facebook,
      instagram,
      tiktok,
      whatsapp,
      linkedIn,
      logo,
      avatar,
      _user: req.user.id
    });

    try {
      await profile.save();
      const user = await req.user.save();
      res.send(user)
      // res.send(profileTemplate(profile))
    } catch (e) {
      res.status(422).send(e)
    }
  })
}
