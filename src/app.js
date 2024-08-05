import cookieParser from "cookie-parser";
import cors from "cors";
import express from "express";
import router from "./app/routes/index.js";
import globalErrorHandler from "./app/middlewares/globalErrorHandler.js";

const app = express();

// parser
const corsOptions = {
    origin: "http://localhost:5173",
    credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use("/api/v1", router);

app.get("/", (req, res) => {
    res.send({
        message: "Job Portal Backend",
    });
});

// global error handler
app.use(globalErrorHandler)



export default app;
