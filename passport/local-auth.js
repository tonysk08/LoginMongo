const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy

const User = require('../Models/users')

passport.serializeUser((user ,done)=>{
    done(null, user.id);
});

passport.deserializeUser(async(id ,done)=>{
    const user = await User.findById(id);
    done(null, user);
});

passport.use('local-signup', new LocalStrategy({
    
        usernameField:'email',
        passwordField: 'password',
        passReqToCallback: true
    },
        async(req,email,password,done) => {
        extraData = req.body;
        const user = new User();
        user.email = email;
        user.password = password;
        user.name = extraData.name
        user.age = extraData.age;
        user.phone = extraData.phonenumber;
        await user.save();
        done(null,user);
    }
));