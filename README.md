📡 API Endpoints

All routes are prefixed with:
/api/flashcards

| Method | Endpoint | Description                                    |
| ------ | -------- | ---------------------------------------------- |
| GET    | `/`      | Get all flashcards                             |
| GET    | `/:id`   | Get a single flashcard by ID                   |
| POST   | `/`      | Create a new flashcard (requires validation)   |
| PUT    | `/:id`   | Update a flashcard by ID (requires validation) |
| DELETE | `/:id`   | Delete a flashcard by ID                       |

🧪 Sample Flashcard Object

{
"chapter": 1,
"question": "What does an SSD use instead of spinning disks?",
"answer": "NAND-based flash memory",
"explanation": "Solid State Drives (SSDs) use flash memory, which allows faster access times and improved durability."
}
