import cookieParser from "cookie-parser";
import cors from "cors";
import express from "express";
import globalErrorHandler from "./app/middlewares/globalErrorHandler.js";
import notFound from "./app/middlewares/notFound.js";
import router from "./app/routes/index.js";

const app = express();

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

// Global error handler
app.use(globalErrorHandler);

// Not found routes
app.use(notFound);

export default app;
