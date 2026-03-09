import mongoose, { Schema } from "mongoose";

const supplierSchema = new mongoose.Schema({
  suppliername: {
    type: String,
    required: true
  },

  email: {
    type: String
  },

  purpuse:{
    type:String
  },

  mobile: {
    type: Number,
    required: true
  },

  address: {
    type: String,
    require: true
  },

  totalPaidAmount: {
    type: Number
  },
  pendingAmount:{
    type:Number
  },

  status: {
    type: String,
    enum: ["active", "inactive"],
    default: "active"
  }

}, { timestamps: true });


const supplierModel = mongoose.model("SupplierModel", supplierSchema)

export { supplierModel }