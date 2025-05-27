import mongoose from "mongoose";

const flashcardSchema = new mongoose.Schema(
  {
    question: { type: String, required: true },
    answer: { type: String, required: true },
    topic: { type: String, required: true },
    chapter: { type: Number, required: true },
  },
  { timestamps: true }
);

export const Flashcard = mongoose.model("Flashcard", flashcardSchema);
