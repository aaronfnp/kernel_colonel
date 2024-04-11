const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const lbSchema = new Schema({
    name: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    score: [{ type: Schema.Types.ObjectId, ref: 'User' }]
});

module.exports = mongoose.model('Leaderboard', lbSchema);