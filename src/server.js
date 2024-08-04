import dotenv from "dotenv";
import app from "./app.js";
import config from "./app/config/index.js";
import connectDB from "./app/utils/db.js";
dotenv.config();


app.listen(config.port,()=>{
    connectDB();
    console.log("server is running on port 6500");
})