const mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');

const Schema = mongoose.Schema;

const AdminSchema = new Schema({
    firstname: {type: String, require: true},
    lastname: {type: String, require: true},
    email: {type: String, require: true, unique: true},
    password: {type: String, require: true, minlength: 6}
});

AdminSchema.plugin(uniqueValidator);

module.exports = mongoose.model('Admin', AdminSchema);