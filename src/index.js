import express from "express";
import { connectDatabase } from "./lib/db.js";
import flashcardRoutes from "./routes/flashcardRoutes.js";

const PORT = process.env.PORT || 5000;
const app = express();

app.use(express.json());
app.use("/api/flashcards", flashcardRoutes);

connectDatabase()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server listening on port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Failed to connect to database: ", error);
  });

export default app;
