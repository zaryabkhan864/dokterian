import jwt from 'jsonwebtoken';
import User from '../models/user.js';

/**
 * Utility to generate JWT Token
 */
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '7d',
  });
};

/**
 * @desc    Register new user
 * @route   POST /api/v1/register
 */
export const addUser = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    // Check for missing fields
    if (!name || !email || !password || !role) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    // Check for existing user
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ message: 'User already exists' });
    }

    // Create and save new user
    const newUser = new User({ name, email, password, role });
    const savedUser = await newUser.save();

    // Prepare user for response
    const userToReturn = savedUser.toObject();
    delete userToReturn.password;

    // Return success
    res.status(201).json({
      message: 'User registered successfully',
      user: userToReturn,
    });
  } catch (error) {
    console.error('Register error:', error);
    res.status(500).json({
      message: 'Registration failed',
      error: error.message,
    });
  }
};

/**
 * @desc    Login user
 * @route   POST /api/v1/login
 */
export const loginUser = async (req, res) => {
  console.log('loginUser');
  try {
    const { email, password } = req.body;

    // Validate input
    if (!email || !password) {
      return res.status(400).json({ message: 'Email and password are required' });
    }

    // Find user by email
    const user = await User.findOne({ email });

    // Check if user exists and password matches
    if (!user || !(await user.matchPassword(password))) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    // Generate JWT token
    const token = generateToken(user._id);

    // Prepare user for response
    const userToReturn = user.toObject();
    delete userToReturn.password;

    // Send token and user
    res.status(200).json({
      message: 'Login successful',
      user: userToReturn,
      token,
    });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({
      message: 'Login failed',
      error: error.message,
    });
  }
};
