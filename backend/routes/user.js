import express from "express";
import { addUser, loginUser } from "../controllers/userController.js";

const router = express.Router();

/**
 * @route   POST /api/v1/register
 * @desc    Register a new user
 * @access  Public
 */
router.post('/register', addUser);

/**
 * @route   POST /api/v1/login
 * @desc    Login user and return JWT token
 * @access  Public
 */
router.post('/auth/login', loginUser);

export default router;
