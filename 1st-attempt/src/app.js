import dotenv from "dotenv";
import express from "express";
import noteRoutes from "./routes/note.routes.js";
import userRoutes from "./routes/user.routes.js";
dotenv.config();

const app = express();
app.use(express.json());

// routes
app.use("/api/notes", noteRoutes);
app.use("/api/auth", userRoutes)



export default app;