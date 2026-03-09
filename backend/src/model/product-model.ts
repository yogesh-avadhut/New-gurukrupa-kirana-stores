import mongoose, { Schema } from "mongoose";

const productSchema = new mongoose.Schema({
  productname: {
    type: String,
    required: true
  },

  price: {
    type: Number,
    required: true,
  },

  image: {
    type: String,
    required: true
  },

  unit: {
    type: String,
    enum: ["kg","gram","nos","liter"],
  },

  category: {
    type: String,
    enum:["cosmatic","food"]
  },
  
  subCategory:{
    type:String,
    enum:["loose","packed"]
  },

  prefNumber: {
    type: Number
  },

  status: {
    type: String,
    enum: ["active", "inactive"],
    default: "active"
  }

}, { timestamps: true });


const productModel = mongoose.model("ProductModel", productSchema)

export { productModel }