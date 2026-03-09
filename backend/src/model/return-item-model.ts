import mongoose, { Schema } from "mongoose";

const returnItemSchema = new mongoose.Schema({

  billNumber: {
    type: String,
    unique: true
  },

  date: {
    type: Date
  },

  customerId: {
    type: String
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

  refundStatus: {
    type: String,
    enum: ["cash-refund","customer-account-settlement","product-exchanged"]
  },
  
  status: {
    type: String,
    enum: ["active", "inactive"],
    default: "active"
  }

}, { timestamps: true });


const returnItemModel = mongoose.model("ReturnItemModel", returnItemSchema);

export { returnItemModel };