import express from "express";
import flashcardRoutes from "./routes/flashcardRoutes.js";

const app = express();

app.use(express.json());
app.use("/api/flashcards", flashcardRoutes);

export default app;
