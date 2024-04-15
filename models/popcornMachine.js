const mongoose = require('mongoose');
const Corn = require('./cornModel');
const popcornMachineSchema = new mongoose.Schema({
    name: { type: String, required: true},
    Level: { type: Number, required: true },
    price: { type: Number, required: true },
    productionRate: { type: Number, required: true},
    effect: { type: String, required: true },
    img: { type: String, required: true },
  });

module.exports = mongoose.model('Popcorn Machine', popcornMachineSchema);