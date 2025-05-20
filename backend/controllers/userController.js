import User from '../models/user.js'; // Adjust the path as needed
import Doctor from '../models/doctor.js'; // You'll need these models
import Patient from '../models/patient.js'; // You'll need these models
export const addUser = async (req, res) => {
    try {
        const { name, email, password, role, ...profileData } = req.body;
        if (!email, !email, !password, !role) {
            return res.status(400).json({ message: "missing data" });
        }
        const existingData = email.findOne(User);
        if (existingData) {
            return res.status(400).json({ message: "User already exisits" });
        }
        if (role === 'Doctor') {
            roleProfile = "Doctor"
            const newDoctor = new Doctor(profileData)
            return res.status(500).json({ data: newDoctor, Message: "Doctor Added Successfully" })
        }
        else {
            roleProfile = "Patient"
            const newPatient = new Patient(profileData)
            return res.status(500).json({ data: newPatient, Message: "Patient Added Succcefully" })
        }
        const newUser = new User({
            name,
            email,
            password,
            role,
            profile: profile._id,
            roleProfile
        })
        const savedUser = await newUser.save();

        // Return the user without the password (security best practice)
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