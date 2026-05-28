import mongoose from "mongoose";

let noteSchema = new mongoose.Schema({
    title : {
        type : String,
        require : true,
    },
    description : {
        type : String,
        require : true,
    }
})

let NoteModel = mongoose.model("3rdattempt", noteSchema)
export default NoteModel;