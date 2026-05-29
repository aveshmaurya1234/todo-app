import express from "express";
import { createController, readController, updateController, deleteController } from "../controllers/note.controller.js";
import authMiddleware from "../middleware/auth.middleware.js";

const router = express.Router()

/**
 * @route POST /api/notes
 * @desc Create a new note need title and description in the request body
 * @access Public
 */

router.post("/", authMiddleware, createController);

/**
 * @route GET /api/notes
 * @desc Get all notes
 * @access Public
 */

router.get("/", authMiddleware, readController);

/**
 * @route PATCH /api/notes/:id 
 * @desc Update a note by Id required description in the request body
 * @access Public
 */

router.patch("/:id", authMiddleware, updateController)

/**
 * @route DELETE /api/notes/:id 
 * @desc Delete a note by Id 
 * @access Public
 */

router.delete("/:id", authMiddleware, deleteController );

export default router;