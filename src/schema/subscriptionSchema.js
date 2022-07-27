const mongoose = require("mongoose");

const subscriptionSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  planName: {
    type: String,
    required: true,
  },
  monthly: {
    type: Boolean,
    required: true,
  },
  yearly: {
    type: Boolean,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  videoQuality: {
    type: String,
    required: true,
  },
  resolution: {
    type: String,
    required: true,
  },
  device: {
    type: String,
    required: true,
  },
  numberOfScreens: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("subscription", subscriptionSchema);