import request from "supertest";
import mongoose from "mongoose";
import app from "../src/index.js";

beforeAll(async () => {
  await mongoose.connect(process.env.MONGO_URI);
});

afterAll(async () => {
  await mongoose.disconnect();
});

describe("Flashcards API", () => {
  let createdId;

  it("GET /api/flashcards - should return all flashcards", async () => {
    const res = await request(app).get("/api/flashcards");
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  it("POST /api/flashcards - should create a new flashcard", async () => {
    const newFlashcard = {
      question: "What is an IP address?",
      answer: "A unique identifier for a device on a network",
      topic: "Networking",
      chapter: "Chapter 1",
    };
    const res = await request(app).post("/api/flashcards").send(newFlashcard);
    expect(res.statusCode).toBe(201);
    expect(res.body).toMatchObject(newFlashcard);
    expect(res.body).toHaveProperty("_id");
    createdId = res.body._id; // Save for later tests
  });

  it("GET /api/flashcards/:id - should return a flashcard by ID", async () => {
    const res = await request(app).get(`/api/flashcards/${createdId}`);
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty("_id", createdId);
  });

  it("PUT /api/flashcards/:id - should update a flashcard", async () => {
    const updatedFlashcard = {
      question: "Updated question?",
      answer: "Updated answer",
      topic: "Updated topic",
      chapter: "Updated chapter",
    };
    const res = await request(app)
      .put(`/api/flashcards/${createdId}`)
      .send(updatedFlashcard);
    expect(res.statusCode).toBe(200);
    expect(res.body).toMatchObject(updatedFlashcard);
  });

  it("DELETE /api/flashcards/:id - should delete a flashcard", async () => {
    const res = await request(app).delete(`/api/flashcards/${createdId}`);
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty(
      "message",
      "Flashcard deleted successfully"
    );
  });
});
