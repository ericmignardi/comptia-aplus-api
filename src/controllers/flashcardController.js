import { Flashcard } from "../models/flashcard.js";

export const getAllFlashcards = async (req, res) => {
  try {
    const flashcards = await Flashcard.find();
    res.status(200).json(flashcards);
  } catch (error) {
    console.error("Error in getAllFlashcards: ", error);
    res.status(500).json({ message: "Server error fetching flashcards" });
  }
};

export const getFlashcardById = async (req, res) => {
  const { id } = req.params;
  try {
    const flashcard = await Flashcard.findById(id);
    if (!flashcard)
      return res.status(404).json({ message: "Flashcard not found" });
    res.status(200).json(flashcard);
  } catch (error) {
    console.log("Error in getFlashcardById: ", error);
    res.status(500).json({ message: "Server error fetching flashcard" });
  }
};

export const createFlashcard = async (req, res) => {
  const { question, answer, topic, chapter } = req.body;
  try {
    if (
      !question?.trim() ||
      !answer?.trim() ||
      !topic?.trim() ||
      !chapter?.trim()
    ) {
      return res
        .status(400)
        .json({ message: "All fields required and cannot be empty" });
    }
    const flashcard = new Flashcard({
      question,
      answer,
      topic,
      chapter,
    });
    await flashcard.save();
    res.status(201).json(flashcard);
  } catch (error) {
    console.error("Error in createFlashcard: ", error);
    res.status(500).json({ message: "Server error creating flashcard" });
  }
};

export const updateFlashcard = async (req, res) => {
  const { question, answer, topic, chapter } = req.body;
  const { id } = req.params;
  try {
    if (
      !question?.trim() ||
      !answer?.trim() ||
      !topic?.trim() ||
      !chapter?.trim()
    ) {
      return res
        .status(400)
        .json({ message: "All fields are required and cannot be empty" });
    }
    const flashcard = await Flashcard.findByIdAndUpdate(
      id,
      { question, answer, topic, chapter },
      { new: true } // Return the updated document
    );
    if (!flashcard) {
      return res.status(404).json({ message: "Flashcard not found" });
    }
    res.status(200).json(flashcard);
  } catch (error) {
    console.error("Error in updateFlashcard: ", error);
    res.status(500).json({ message: "Server error updating flashcard" });
  }
};

export const deleteFlashcard = async (req, res) => {
  const { id } = req.params;
  try {
    const flashcard = await Flashcard.findByIdAndDelete(id);
    if (!flashcard)
      return res.status(404).json({ message: "Flashcard not found" });
    res.status(200).json({ message: "Flashcard deleted successfully" });
  } catch (error) {
    console.error("Error in deleteFlashcard: ", error);
    res.status(500).json({ message: "Server error deleting flashcard" });
  }
};
