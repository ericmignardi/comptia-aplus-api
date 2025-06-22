import { body } from "express-validator";

export const flashcardValidationRules = [
  body("question").trim().notEmpty().withMessage("Question is required"),
  body("answer").trim().notEmpty().withMessage("Answer is required"),
  body("topic").trim().notEmpty().withMessage("Topic is required"),
  body("chapter").trim().notEmpty().withMessage("Chapter is required"),
];
