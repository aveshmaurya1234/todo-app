import dotenv from "dotenv"
import express from "express"
import NoteModel from "./models/note.models.js"
dotenv.config()

const app = express()
app.use(express.json())

/**
 * @route POST /api/notes
 * @desc Create a new note need title and description in the request body
 * @access Public
 */

app.post("/api/notes", async (req, res) => {
    try {
        let {title, description} = req.body

        if(!title || !description)
            return res.status(400).json({ error: "All fields are required"})

        title = title.trim()
        description = description.trim()

        if(title.length < 4 || description.length<10)
            return res.status(400).json({ error: "title at list 4 char and description at list 10 char"})

        let newNote = await NoteModel.create({
            title, description
        })

        return res.status(201).json({message: "note is created successfully", data: newNote})

    } catch (error) {
        return res.status(500).json({
            message: "Internal server error",
            error: error.message
        })
    }
})

/**
 * @route GET /api/notes
 * @desc Read all notes
 * @access Public
 */

app.get("/api/notes", async (req, res) => {
    try {
        let allNotes = await NoteModel.find()

        return res.status(200).json({message: "data feched successfully", data: allNotes})

    } catch (error) {
        return res.status(500).json({
            message: "Internal server error",
            error: error.message
        })
    }
})

/**
 * @route PATCH /api/notes/:id
 * @desc Update a note by ID
 * @access Public
 */
app.patch("/api/notes/:id", async (req, res) => {
    try {
        let {id} = req.params;
        let {description} = req.body;

        if(!id)
            return res.status(400).json({ error: "id is required"})

        if(!description)
            return res.status(400).json({ error: "description is required"})

        description = description.trim()

        if(description.length<10)
            return res.status(400).json({ error: "description at list 10 char"})

        let update = await NoteModel.findByIdAndUpdate(id, {description}, {new: true})

        return res.status(200).json({message: "note update successfully", data: update})

    } catch (error) {
        return res.status(500).json({
            message: "Internal server error",
            error: error.message
        })
    }
})

/**
 * @route DELETE /api/notes/:id
 * @desc Delete a note by ID
 * @access Public
 */

app.delete("/api/notes/:id", async (req, res) => {
    try {
        let {id} = req.params;

        if(!id)
            return res.status(400).json({ error: "id is required"})

        let note = await NoteModel.findById(id)
        if(!note)
            return res.status(404).json({ error: "id is not found"})

        let notedelete = await NoteModel.findByIdAndDelete(id)

        return res.status(200).json({message: "note deleted successfully", data: notedelete})

    } catch (error) {
        return res.status(500).json({
            message: "Internal server error",
            error: error.message
        })
    }
})

export default app;