import mongoose from "mongoose";

let connetctDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("mongodb connected")
    } catch (error) {
        console.log("error in connectDB")
    }
} 

export default connetctDB;