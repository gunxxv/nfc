
if (process.env.NODE_ENV === 'production') {
  module.exports = require('./prod')
} else {
  module.exports = require('./dev')
}

// ngrok config add-authtoken 2EWoZMLheq6Lmqu0oOO6NyCaONM_7psj21Nkz4MqB7tgukvH9
