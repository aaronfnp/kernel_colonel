const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

const SALT_ROUNDS = 6;

const userSchema = new Schema({
  name: {type: String, required: true},
  email: {
    type: String,
    unique: true,
    trim: true,
    lowercase: true,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  score: { type: Number, ref: 'Corn.totalCornVal', default: 0 }, // Using this as CURRENT $
  totalScore: { type: Number, ref: 'Corn.totalCornVal', default: 0 }, // Using this as TOTAL
  // THIS WILL BECOME A REFERENCE TO THE UPGRADES MODEL QUANTITY
  upgrades: {type: Number, ref: 'Upgrade.quantity', default: 0}

}, {
  timestamps: true,
  toJSON: {
    transform: function(doc, ret) {
      delete ret.password;
      return ret;
    }
  }
});

userSchema.pre('save', async function(next) {
  // 'this' is the user document
  if (!this.isModified('password')) return next();
  // Replace the password with the computed hash
  this.password = await bcrypt.hash(this.password, SALT_ROUNDS);
});

module.exports = mongoose.model('User', userSchema);