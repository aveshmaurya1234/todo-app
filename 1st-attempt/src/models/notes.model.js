import mongoose from "mongoose";

let notesSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    user: {
        type :String,
    }
})

const NotesModel = mongoose.model("Notes", notesSchema);

export default NotesModel;