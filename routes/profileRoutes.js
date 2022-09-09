const mongoose = require('mongoose')
const requireLogin = require('../middlewares/requireLogin')

const Profile = mongoose.model('profiles')

module.exports = (app) => {
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
    } catch (e) {
      res.status(422).send(e)
    }
  })
}
