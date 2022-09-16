const _ = require("lodash");
const { Path } = require("path-parser");
const { URL } = require("url");
const mongoose = require("mongoose");
const requireLogin = require("../middlewares/requireLogin");
const profileTemplate = require("../services/cardsTemplates/profileTemplate");

const Profile = mongoose.model("profiles");

module.exports = (app) => {
  app.get("/api/profiles", requireLogin, async (req, res) => {
    const profiles = await Profile.find({ _user: req.user.id });

    res.send(profiles);
  });

  app.get("/api/profiles/:profileId", async (req, res) => {
    const profile = await Profile.findById(req.params.profileId);

    res.send(profile);
  });

  app.get("/api/profiles/:profileId/:choice", (req, res) => {
    res.send("Thanks!");
  });

  app.get("/api/profiles/webhooks", (req, res) => {
    const profile = new Profile({
      input_name: "kan",
    });
    res.send(profileTemplate(profile));
  });

  // app.get('/api/profiles/webhooks', (req, res) => {
  //   const p = new Path('/api/profiles/:profileId/:choice')

  //   const events = _.chain(req.body)

  //   .map(({ email1, url}) => {
  //     const match = p.test(new URL(url).pathname)
  //     if (match) {
  //       return { email1, profileId: match.profileId, styleId: match.choice}
  //     }
  //   })
  //   .compact()
  //   .uniqBy('email1', 'profileId', 'styleId')
  //   .each(({ profileId, email1}) => {
  //     Profile.updateOne({
  //       id: profileId,
  //       email1: email1
  //     }, {
  //       $set: { 'email1': 'jaculatio@gmail.com' }
  //     }).exec();
  //   })
  //   .value();

  //   console.log(events)
  //   // res.send(profileTemplate(events))
  //   res.send({})
  // })

  app.delete("/api/profiles/:profileId", requireLogin, async (req, res) => {
    try {
      const profile = await Profile.findByIdAndDelete(req.params.profileId);
      res.send({});
    } catch (e) {
      res.status(422).send(e);
    }
  });

  app.put("/api/profiles/:profileId", requireLogin, async (req, res) => {
    const profile = await Profile.findByIdAndUpdate(
      req.params.profileId,
      req.body
    );
    res.send({});
  });

  app.post("/api/profiles", requireLogin, async (req, res) => {
    const {
      profile_title,
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
    } = req.body;

    const profile = new Profile({
      profile_title,
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
      createOn: Date.now(),
      _user: req.user.id,
    });

    try {
      await profile.save();
      const user = await req.user.save();
      res.send(user);
    } catch (e) {
      res.status(422).send(e);
    }
  });
};
