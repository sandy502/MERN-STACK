const mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    firstname: {type: String, require: true},
    lastname: {type: String, require: true},
    email: {type: String, require: true, unique: true},
    password: {type: String, require: true, minlength: 6},
    dob: {type: String, require: true}
});

UserSchema.plugin(uniqueValidator);
 
module.exports = mongoose.model('User', UserSchema);