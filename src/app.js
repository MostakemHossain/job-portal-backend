import cookieParser from "cookie-parser";
import cors from "cors";
import express from "express";
const app= express();

//parser
const corsOptions={
    origin: "http://localhost:5173",
    credentials: true,
}
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({
    extended:true
}))
app.use(cookieParser());

app.get("/", (req, res) => {
    res.send({
      message: "Job Portal Backend",
    });
  });

export default app;
