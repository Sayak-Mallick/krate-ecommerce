import express, { Application } from "express";
import cookieParser from "cookie-parser";
import cors from "cors";

const app: Application = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors());

app.get("/health", (req, res) => {
  res.json({
    status: "ok",
  });
});

export default app;
