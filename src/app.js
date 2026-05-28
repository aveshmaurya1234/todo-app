import dotenv from "dotenv";
import express from "express";
import NotesModel from "./config/models/notes.model.js";

dotenv.config();

const app = express();
app.use(express.json());


/**
 * @route POST /api/notes
 * @desc Create a new note need title and description in the request body
 * @access Public
 */

app.post("/api/notes", async (req, res) => {
    const { title, description } = req.body;

    // --- Validation ---
    if (!title || !description) {
        return res.status(400).json({ error: "Title and description are required" });
    }
    if(title.trim().length < 4 || description.trim().length < 10) {
        return res.status(400).json({ error: "Title must be at least 4 characters and description must be at least 10 characters" });
    }

    // --- In a real application, you would save the note to the database here ---

    const newNote = await NotesModel.create({ title, description });
    res.status(201).json({ message: "Note created successfully", data: newNote });
    
});


export default app;