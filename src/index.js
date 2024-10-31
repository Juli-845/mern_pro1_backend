import dotenv from "dotenv";
import connectDB from "./db/index.js"; // Ensure that file extensions like `.js` are included if needed.

dotenv.config({ path: "./.env" });
connectDB();

