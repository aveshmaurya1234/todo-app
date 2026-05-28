import mongoose, { model } from "mongoose";


let noteSchema = new mongoose.Schema({
    title : {
        type : String,
        required : true,
        trim : true
    },
    description : {
        type : String,
        required : true,
        trim : true
    }
})

let NoteModel = mongoose.model("2ndattempt", noteSchema)

export default NoteModel;