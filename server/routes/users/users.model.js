var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var UserSchema = new Schema({
    user_name: {type: String, required: true},
    user_pass: {type: String, required: true},
    user_designation: String,
    user_company: String,
    updated: { type: Date, default: Date.now }
});
module.exports = mongoose.model('users', UserSchema);