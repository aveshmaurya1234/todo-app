import dotenv from "dotenv";
import express from "express";
import { createController, readController, updateController, deleteController } from "./controllers/note.controller.js";

dotenv.config();

const app = express();
app.use(express.json());


/**
 * @route POST /api/notes
 * @desc Create a new note need title and description in the request body
 * @access Public
 */

app.post("/api/notes", createController);

/**
 * @route GET /api/notes
 * @desc Get all notes
 * @access Public
 */

app.get("/api/notes", readController);

/**
 * @route PATCH /api/notes/:id 
 * @desc Update a note by Id required description in the request body
 * @access Public
 */

app.patch("/api/notes/:id", updateController)

/**
 * @route DELETE /api/notes/:id 
 * @desc Delete a note by Id 
 * @access Public
 */
app.delete("/api/notes/:id",deleteController );


export default app;