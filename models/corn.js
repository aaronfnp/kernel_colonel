const { type } = require('@testing-library/user-event/dist/type');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cornSchema = new Schema({
    cornVal: { type: Number, required: true },
    totalCornVal: {type: Number, required: true},
    image: { type: String, required: true },
  });

module.exports = mongoose.model('Corn', cornSchema);
