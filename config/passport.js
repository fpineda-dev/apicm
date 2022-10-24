const JwtStrategy = require('passport-jwt').Strategy;
const { ExtractJwt } = require('passport-jwt');
// const keys = require('./keys');
const { User } = require('../models/users');

const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = 'secret';

module.exports = (passport) => {
  passport.use(
    // eslint-disable-next-line camelcase
    new JwtStrategy(opts, (jwt_payload, done) => {
      // eslint-disable-next-line camelcase, no-undef
      User.findOne({ where: jwt_payload.id_user })
        .then((user) => {
          console.log(`This is a Current user ${user}`);
          if (user) {
            return done(null, user);
          }
          return done(null, false);
        })
        .catch((err) => console.log(err));
    }),
  );
};
