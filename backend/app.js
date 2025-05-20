import express from "express";
import { connectDatabase } from "./config/dbConnection.js";
import dotenv from "dotenv";

// 👉 Load .env first, before anything else
dotenv.config({ path: "backend/config/config.env" });

const app = express();


// 👈 Connect DB after loading env
connectDatabase();

import user from "./routes/user.js"

app.use("/api/v1",user)

app.listen(process.env.PORT, () => {
  console.log(`Server started on PORT: ${process.env.PORT}`);
});
