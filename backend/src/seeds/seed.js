import fs from "fs";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { Flashcard } from "../models/flashcard.js";

dotenv.config();

const flashcards = JSON.parse(
  fs.readFileSync("./src/json/flashcards.json", "utf-8")
);

const seedDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Database Connected");
    await Flashcard.deleteMany();
    console.log("Database Cleared");
    await Flashcard.insertMany(flashcards);
    console.log("Documents Inserted");
    process.exit(0);
  } catch (error) {
    console.error("Error seeding database: ", error);
    process.exit(1);
  }
};

seedDB();
