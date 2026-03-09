import mongoose, { Schema } from "mongoose";

const paymentSchema = new mongoose.Schema({

  paymentType:{
    type:String,
    enum:["credit","debit"]
  },

  paymentBy: {
    type: String,
    enum:["online","cash"]
  },

  for: {
    type: String //expenses,customerId,SupplierId
  },

  note: {
    type: String
  },

  status: {
    type: String,
    enum: ["active", "inactive"],
    default: "active"
  }

}, { timestamps: true });


const paymentModel = mongoose.model("PaymentModel", paymentSchema)

export { paymentModel }