import mongoose, { Schema } from "mongoose";

const customerSchema = new mongoose.Schema({
  customername: {
    type: String,
    required: true
  },

  email: {
    type: String,
    required: true,
  },

  mobile: {
    type: Number,
    required: true
  },

  address: {
    type: String,
    require: true
  },

  pendingBalance: {
    type: Number
  },

  status: {
    type: String,
    enum: ["active", "inactive"],
    default: "active"
  }

}, { timestamps: true });


const customerModel = mongoose.model("CustomerModel", customerSchema)

export { customerModel }