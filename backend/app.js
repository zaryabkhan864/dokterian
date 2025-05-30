// backend/app.js
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import morgan from "morgan";
import { connectDatabase } from "./config/dbConnection.js";

// Load environment variables
dotenv.config({ path: "backend/config/config.env" });

// Initialize app
const app = express();

// Middlewares
app.use(express.json()); // Parse JSON request bodies
app.use(cors());         // Enable Cross-Origin requests
app.use(morgan("dev"));  // Log HTTP requests

// Connect to MongoDB
connectDatabase();

// Routes
import userRoutes from "./routes/user.js";

app.use("/api/v1", userRoutes);

// Root route
app.get("/", (req, res) => {
  res.send("API is running...");
});

// 404 Handler for unmatched routes
app.use((req, res, next) => {
  res.status(404).json({
    message: "Endpoint not found",
  });
});

// Global Error Handler (optional)
app.use((err, req, res, next) => {
  console.error("Unhandled Error:", err);
  res.status(500).json({
    message: "Something went wrong",
    error: err.message,
  });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
