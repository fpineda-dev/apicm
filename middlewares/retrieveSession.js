const passport = require('passport');

/* eslint-disable no-unused-vars */
const retrieveSession = () => {
  let mail;
  // eslint-disable-next-line no-unused-expressions, no-sequences
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    res.json({
      name: req.user.NAME,
      email: req.user.EMAIL,
    });
    mail = req.user.EMAIL;
    console.log(`This Current Email ---> ${req.user.EMAIL}`);
  };

  return mail;
};

module.exports = { retrieveSession };
