import mongoose from "mongoose";

const plansSchema = new mongoose.Schema({
  planName: {
    type: String,
    required: true,
  },
  monthlyPrice: {
    type: Number,
    required: true,
  },
  yearlyPrice: {
    type: Number,
    required: true,
  },
  VideoQuality: {
    type: String,
    required: true,
  },
  Resolution: {
    type: String,
    required: true,
  },
  Device: {
    type: String,
    required: true,
  },
  NumberOfScreens: {
    type: String,
    required: true,
  },
});

export default mongoose.model("plans", plansSchema);
