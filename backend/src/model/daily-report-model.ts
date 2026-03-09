import mongoose, { Schema } from "mongoose";

const dailyReportSchema = new mongoose.Schema({
  totalSale: {
    type: Number,
    required: true
  },

  openingBalance: {
    type: Number,
    required: true,
  },

  closingBalance: {
    type: Number,
    required: true
  },

  date: {
    type: Date,
    required: true
  },

  status: {
    type: String,
    enum: ["active", "inactive"],
    default: "active"
  }

}, { timestamps: true });


const dailyReportModel = mongoose.model("DailyReportModel", dailyReportSchema)

export { dailyReportModel }