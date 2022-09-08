const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; // eslint-disable-line

export default inputEmail => {
  const invalidEmail = re.test(inputEmail)

  if (invalidEmail) {
    return `Email not invalid: ${invalidEmail}`;
    // return 'Invalid email address';
  }

  return null;
}