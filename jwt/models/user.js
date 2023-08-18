const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bCrypt = require('bcryptjs')

const userSchema = new Schema({
    username: String,
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
    }
});

userSchema.methods.setPassword = function (password) {
    this.password = bCrypt.hashSync(password, bCrypt.genSaltSync(5))
}

userSchema.method.validPassword = function (password) {
    return bCrypt.compareSync(password. this.password)
}

const User = mongoose.model('user', userSchema);

module.exports = User;

