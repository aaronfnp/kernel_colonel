import userSchema from '../models/user'

const mongoose = require('mongoose');
const Schema = require = mongoose.Schema


const lbSchema = new Schema ({
    name: [userSchema.name],
    score: [userSchema.score]
});

module.exports = mongoose.model('Leaderboard', lbSchema);