import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
    try {
        // Check 1: Environment variable loaded?
        console.log(
            "Mongo URI loaded:",
            !!process.env.MONGODB_URI
        );

        // Check 2: Correct MongoDB URL?
        console.log(
            "Mongo URI starts correctly:",
            process.env.MONGODB_URI?.startsWith("mongodb+srv://") ||
            process.env.MONGODB_URI?.startsWith("mongodb://")
        );

        // Check 3: Connect database
        const connectionInstance = await mongoose.connect(
            `${process.env.MONGODB_URI}/${DB_NAME}`
        );

        console.log(
            "MongoDB connected!",
            connectionInstance.connection.host
        );

    } catch (error) {
        console.log("MongoDB connection failed:", error);
        process.exit(1);
    }
};

export default connectDB;