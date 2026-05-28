import app from "./src/app.js";
import connetctDB from "./src/config/db.js";

await connetctDB()

let port = process.env.PORT || 4000;
app.listen(port, ( ) => {
    console.log(`Server is running port on ${port} `)
})