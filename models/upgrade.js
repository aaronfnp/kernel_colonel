const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const upgradeSchema = new Schema({
    name: { type: String, required: true},
    level: { type: Number, required: true },
    price: { type: Number, required: true },
    productionRate: { type: Number, required: true},
    effect: { type: String, required: true },
    img: { type: String, required: true },
  });

module.exports = mongoose.model('upgrade', upgradeSchema);