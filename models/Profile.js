const mongoose = require('mongoose')
const { Schema } = mongoose


const profileSchema = new Schema ({
  firstName: String,
  title: String,
  company: String,
  _user: {type: Schema.Types.ObjectId, ref: 'User'},
})

mongoose.model('profiles', profileSchema)