import dotenv from "dotenv";
import express from "express";
import NotesModel from "./models/notes.model.js";

dotenv.config();

const app = express();
app.use(express.json());


/**
 * @route POST /api/notes
 * @desc Create a new note need title and description in the request body
 * @access Public
 */

app.post("/api/notes", async (req, res) => {
    let { title, description } = req.body;

    // --- trim values ---
    title = title.trim();
    description = description.trim();

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

/**
 * @route GET /api/notes
 * @desc Get all notes
 * @access Public
 */

app.get("/api/notes", async (req, res) => {
    const notes = await NotesModel.find();
    res.status(200).json({ data: notes });
});

/**
 * @route PATCH /api/notes/:id 
 * @desc Update a note by Id required description in the request body
 * @access Public
 */

app.patch("/api/notes/:id", async (req, res) => {
    const {id} = req.params;
    let {description} = req.body

    // --- trim values ---
    description = description.trim();

    // --- Validation ---
    if (!id) {
        return res.status(400).json({ error: "ID is required" });
    }
    if (!description) {
        return res.status(400).json({ error: "description is required" });
    }
    if(description.trim().length < 10) {
        return res.status(400).json({ error: "description must be at least 10 characters" });
    }

    // --- you would update the note in the database here ---

    const note = await NotesModel.findById(id);
    if (!note) {
        return res.status(404).json({ error: "id not found" });
    }

    note.description = description;
    await note.save();


    // const updatedNote = await NotesModel.findByIdAndUpdate(id, { description }, { new: true });


    res.status(200).json({ data: note });
})

export default app;