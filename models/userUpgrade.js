const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userUpgradeSchema = new Schema({
    name: {type: String, required: true},
    description: {type: String, required: true},
    quantity: {type: Number, required: true},
    price: {type: Number, required: true},
    productionRate: {type: Number, required: true},
    isPassive: {type: Boolean, required: true},
    img: {type: String, required: true}
});

module.exports = mongoose.model('UserUpgrade', userUpgradeSchema);