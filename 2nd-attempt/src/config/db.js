import mongoose from "mongoose"

let connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("mongodb connected")
    } catch (error) {
        console.log("error in mongodb connection")
    }
}

export default connectDB;