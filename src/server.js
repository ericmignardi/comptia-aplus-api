import dotenv from "dotenv";
import app from "./app.js";
import { connectDatabase } from "./lib/db.js";

dotenv.config();

const PORT = process.env.PORT || 5000;

connectDatabase()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server listening on port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Failed to connect to database: ", error);
  });
