const mongoose = require('mongoose');
// var uniqueValidator = require('mongoose-unique-validator');

const Schema = mongoose.Schema;

const BlogSchema = new Schema({
    heading: {type: String, require: true},
    blog: {type: Number},
    userId: {   
        firstname: {type: String, require:true},
        lastname: {type: String , require:true}
    }
});

// BlogSchema.plugin(uniqueValidator);

module.exports = mongoose.model('User', BlogSchema);