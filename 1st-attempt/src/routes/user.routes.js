import express from "express"
import { userControllers } from "../controllers/user.controller.js";

const router = express.Router();

router.post("/", userControllers)

export default router;