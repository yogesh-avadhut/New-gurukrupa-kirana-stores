
import mongoose from "mongoose";
import dotenv from "dotenv"

dotenv.config()

async function dbconnect() {
  if (!process.env.URL) {
    throw new Error("MongoDB URL not found");
  }
  await mongoose.connect(process.env.URL);
  console.log("db connected successfully ...")
}

export { dbconnect }