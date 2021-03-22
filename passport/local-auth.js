const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy

const User = require('../Models/users')

passport.use('local-signup', new LocalStrategy({
    
        usernameField:'email',
        passwordField: 'password',
        passReqToCallback: true
    },
    (req,email,password,done) => {
        extraData = req.body;
        const user = new User();
        user.email = email;
        user.password = password;
        user.name = extraData.name
        user.age = extraData.age;
        user.phone = extraData.phonenumber;
    }
))