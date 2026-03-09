import mongoose, { Schema } from "mongoose";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },

  email: {
    type: String,
    required: true,
  },

  password: {
    type: String,
    required: true
  },

  role: {
    type: String,
    enum: ["admin","superAdmin"],
  },

  verificationCode: {
    type: String
  },
  
  isVerifiedEmail: {
    type: Boolean,
    default: false
  },

  status: {
    type: String,
    enum: ["active", "inactive"],
    default: "active"
  }

}, { timestamps: true });


const userModel = mongoose.model("UserModel", userSchema)

export { userModel }