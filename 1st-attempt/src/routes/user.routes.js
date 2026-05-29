import express from "express"
import { userRegisterControllers } from "../controllers/user.controller.js";

const router = express.Router();

/**
 * @route POST /api/auth/register
 * @desc Register a new user need name and email in the request body
 * @access Public
 */

router.post("/register", userRegisterControllers)

export default router;