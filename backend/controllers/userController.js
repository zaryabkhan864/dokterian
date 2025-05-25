import User from '../models/user.js';

export const addUser = async (req, res) => {
    try {
        const { name, email, password, role } = req.body;
        if (!name || !email || !password || !role) {
            return res.status(400).json({ message: "missing data" });
        }
        const existingData = await User.findOne({ email });
        if (existingData) {
            return res.status(400).json({ message: "User already exists" });
        }

        const newUser = new User({
            name,
            email,
            password,
            role,
        })
        const savedUser = await newUser.save();


        const userToReturn = savedUser.toObject();
        delete userToReturn.password;

        res.status(201).json({
            message: 'User created successfully',
            user: userToReturn
        });
    } catch (error) {
        console.error('Error adding user:', error);
        res.status(500).json({
            message: 'Error creating user',
            error: error.message
        });
    }
}