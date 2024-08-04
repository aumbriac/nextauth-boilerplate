"use server";
import mongoose from "mongoose";

async function connect() {
  if (mongoose?.connection?.readyState === 0) {
    try {
      await mongoose.connect(process.env.MONGODB_URI!);
      console.info("Mongoose connected");
    } catch (error) {
      console.error("Mongoose connection error:", error);
    }
  }
}

export default connect;
