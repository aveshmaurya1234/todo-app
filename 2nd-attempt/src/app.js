import dotenv from "dotenv"
dotenv.config()
import express from "express"
import NoteModel from "./models/note.models.js"

const app = express()
app.use(express.json())


/**
 * @route POST /api/notes
 * @desc Create a new note need title and description in the request body
 * @access Public
 */
app.post("/api/notes", async (req, res) => {
    try {
        let {title, description} = req.body;

        // --- trim values ---
        title = title.trim();
        description = description.trim();

        // --- validation ---
        if(!title || !description)
            return res.status(400).json({error: "All fields are required"})
        if(title.length < 4 || description.length < 10 )
            return res.status(400).json({error: "title atlist 4 char and description atlist 10 char "})

        let newNotes = await NoteModel.create({
            title, description
        })

        return res.status(201).json({message: "notes are created successfully.", data: newNotes})

    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
})

/**
 * @route GET /api/notes
 * @desc Read all notes
 * @access Public
 */
app.get("/api/notes", async (req, res) => {
    try {

        let AllNotes = await NoteModel.find()

        return res.status(201).json({message: "notes are created successfully.", data: AllNotes})

    } catch (error) {
        return res.status(400).json({error: "Internal Server Error", error})
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

        description = description.trim()

        if(!id)
            return res.status(400).json({error: "id is required"})
        if(!description)
            return res.status(400).json({error: "description is required"})

        if(description.length < 10)
            return res.status(400).json({error: "at liste 10 char"})

        let note = await NoteModel.findById(id)
        if(!note)
            return res.status(400).json({error: "note note find"})

        note.description = description
        await note.save()

        // let updateNote = await NoteModel.findByIdAndUpdate(id, {description}, {new: true})


        return res.status(200).json({message: "notes updated successfully.", data: note})

    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
})

export default app;