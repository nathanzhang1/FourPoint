import { Router } from "express";
import { getCourses, addCourse, updateCourse, deleteCourse } from "../controllers/courseController.js";

export const courseRouter = Router();

courseRouter.get("/", getCourses);
courseRouter.post("/", addCourse);
courseRouter.put("/:key", updateCourse);
courseRouter.delete("/:key", deleteCourse);