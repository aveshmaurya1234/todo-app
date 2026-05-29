import dns from "dns";

export const dnsConnect = () => {
    dns.setServers(["8.8.8.8" ,"8.8.4.4"]);

    dns.setDefaultResultOrder("ipv4first");
};
dnsConnect()

import "dotenv/config";
// import dotenv from "dotenv";
// dotenv.config();
import express from "express";
import noteRoutes from "./routes/note.routes.js";
import userRoutes from "./routes/user.routes.js";
import cookieParser from "cookie-parser";



const app = express();
app.use(express.json());
app.use(cookieParser());

// routes
app.use("/api/notes", noteRoutes);
app.use("/api/auth", userRoutes)



export default app;