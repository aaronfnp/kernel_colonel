const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const storeSchema = new Schema({
    popcornMachine: {
        type: Schema.Types.ObjectId,
        ref: 'PopcornMachine'
    },
    popcornMachineLevel: {
        type: Number,
        default: 0
    }
});

module.exports = mongoose.model('Store', storeSchema);