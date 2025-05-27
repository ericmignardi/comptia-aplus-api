import mongoose from "mongoose";

export const connectDatabase = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`Connected to MongoDB. Server: ${conn.connection.host}`);
  } catch (error) {
    console.error("Unable to connect to MongoDB: ", error);
    throw error; // Important for upstream handling
  }
};
