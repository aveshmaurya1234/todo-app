import express from "express";
import { createController, readController, updateController, deleteController } from "../controllers/note.controller.js";

const router = express.Router()

/**
 * @route POST /api/notes
 * @desc Create a new note need title and description in the request body
 * @access Public
 */

router.post("/", createController);

/**
 * @route GET /api/notes
 * @desc Get all notes
 * @access Public
 */

router.get("/api/notes", readController);

/**
 * @route PATCH /api/notes/:id 
 * @desc Update a note by Id required description in the request body
 * @access Public
 */

router.patch("/api/notes/:id", updateController)

/**
 * @route DELETE /api/notes/:id 
 * @desc Delete a note by Id 
 * @access Public
 */

router.delete("/api/notes/:id",deleteController );

export default router;