import express from "express";
import {
  getAllFlashcards,
  getFlashcardById,
  createFlashcard,
  updateFlashcard,
  deleteFlashcard,
} from "../controllers/flashcardController.js";
import { flashcardValidationRules } from "../validators/flashcardValidator.js";
import { validate } from "../middleware/validate.js";

const router = express.Router();

router.get("/", getAllFlashcards);
router.get("/:id", getFlashcardById);
router.post("/", flashcardValidationRules, validate, createFlashcard);
router.put("/:id", flashcardValidationRules, validate, updateFlashcard);
router.delete("/:id", deleteFlashcard);

export default router;
