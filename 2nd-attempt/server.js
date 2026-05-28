import app from "./src/app.js";
import connectDB from "./src/config/db.js";

await connectDB()

let port = process.env.PORT || 4000;

app.listen(port, () =>{
    console.log(`Server is connected on port ${port}`)
})

