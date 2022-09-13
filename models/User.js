const mongoose = require('mongoose')
const { Schema } = mongoose

const userScheme = new Schema ({
  googleId: String,
  displayName: String
})

mongoose.model('users', userScheme)