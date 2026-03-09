import mongoose, { Schema } from "mongoose";

const billingSchema = new mongoose.Schema({

  billNumber: {
    type: String,
    unique: true
  },

  date: {
    type: Date
  },

  items: [
    {
      itemName: {
        type: String
      },
      weight: {
        type: Number
      },
      price: {
        type: Number
      }
    }
  ],
  totalAmount: {
    type: Number
  },
  paymentMode: {
    type: String,
    enum: [ "cash","online","credit" ]
  },

  customerId: {
    type: String
  },

  status: {
    type: String,
    enum: ["active", "inactive"],
    default: "active"
  }

}, { timestamps: true });


const billingModel = mongoose.model("BillingModel", billingSchema);

export { billingModel };