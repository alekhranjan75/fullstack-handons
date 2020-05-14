const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create a schema
const userSchema = new Schema({
    googleID: String,
    credits: {
        type: Number,
        default: 0
    }
});

const User = mongoose.model('User', userSchema);

module.exports = User