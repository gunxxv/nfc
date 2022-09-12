const mongoose = require('mongoose')
const { Schema } = mongoose


const profileSchema = new Schema ({
  profile_title: String,
  input_name: String,
  input_name_en: String,
  company_name: String,
  company_name_en: String,
  title: String,
  title_en: String,
  address: String,
  address_en: String,
  location: String,
  email1: String,
  email2: String,
  website: String,
  line: String,
  tel1: String,
  tel2: String,
  tel3: String,
  facebook: String,
  instagram: String,
  tiktok: String,
  whatsapp: String,
  linkedIn: String,
  logo: String,
  avatar: String,
  _user: {type: Schema.Types.ObjectId, ref: 'User'},
})

mongoose.model('profiles', profileSchema)