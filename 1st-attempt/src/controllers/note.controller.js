import mongoose from "mongoose";
import NotesModel from "../models/notes.model.js";

let createController = async (req, res) => {
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
}

let readController = async (req, res) => {
    const notes = await NotesModel.find();
    res.status(200).json({ data: notes });
};

let updateController =  async (req, res) => {
    const {id} = req.params;
    let {description} = req.body

    // --- Validation ---
    if (!id) {
        return res.status(400).json({ error: "ID is required" });
    }

    // --- check id is valid mongoose ObjectId or not // and import mongoose ---
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ error: "Invalid ID format" });
    }

    if (!description) {
        return res.status(400).json({ error: "description is required" });
    }

    // --- trim values ---
    description = description.trim();
    
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

    res.status(200).json({message: "note update successfully", data: note });
}

let deleteController = async (req, res) => {
    const {id} = req.params;
    // --- Validation ---
    if (!id) {
        return res.status(400).json({ error: "ID is required" });
    }

    // --- check id is valid mongoose ObjectId or not // and import mongoose ---
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ error: "Invalid ID format" });
    }

    // --- first way to delete the note in the database here ---
    const note = await NotesModel.findByIdAndDelete(id);
    if (!note) {
        return res.status(404).json({ error: "Note not found" });
    }

    // --- second way to delete the note in the database here ---
    // const note = await NotesModel.findById(id);
    // if (!note) {
    //     return res.status(404).json({ error: "Note not found" });
    // }
    // await note.deleteOne(); // ya note.delete(); 

    res.status(200).json({ message: "Note deleted successfully" });
}

export {
    createController,
    readController,
    updateController,
    deleteController
};