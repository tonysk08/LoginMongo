const mongoose = require("mongoose");
const bcrypt = require('bcrypt-nodejs')
const {Schema} = mongoose

const userSchema = new Schema({
    email:String,
    password: String,
    name: String,
    age:Number,
    phone:String
});

userSchema.methods.cryptPassword = (password) =>{
    return bcrypt.hashSync(password, bcrypt.genSaltSync(10));
}

userSchema.methods.validatePassword = function(password){
    return bcrypt.compareSync(password, this.password);
};

module.exports = mongoose.model('users',userSchema);
