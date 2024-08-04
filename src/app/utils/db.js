import mongoose from "mongoose";
import config from "../config/index.js";

const connectDB= async()=>{
    try {
        await mongoose.connect(config.database_url);
        console.log("Database connected successfully.....")

        
    } catch (error) {
        console.log(error)
    }
}

export default connectDB;