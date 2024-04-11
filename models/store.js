const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const popcornMachineSchema = require('./popcornMachine');

const storeSchema = new Schema({
    popcornMachine: [popcornMachineSchema]
});

module.exports = mongoose.model('Store', storeSchema);