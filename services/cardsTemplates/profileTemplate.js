const keys = require('../../config/keys')

module.exports = profile => {
  return `
    <html>
      <body>
        <div style="text=align: center;">
          <h3>My name is morgan</h3>
          <p>Test Test Test Test</p>
          <p>${profile.body}</p>
          <div>
            <a href="${keys.redirectDomain}/api/profiles/${profile.id}/1">one</a>
          </div>
          <div>
            <a href="${keys.redirectDomain}/api/profiles/${profile.id}/2">two</a>
          </div>
        </div>
      </body>
    </html>
  
  `;
}