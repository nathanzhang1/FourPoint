import express from "express";
import cors from "cors";
import "dotenv/config";
import { courseRouter } from "./src/routes/courseRouter.js";

const app = express();

app.use(cors());
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.use("/api/courses", courseRouter);

app.listen(process.env.PORT || 3000, () => console.log(`Listening on port ${process.env.PORT || 3000}`));