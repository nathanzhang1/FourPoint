import { Router } from "express";
import { getPlans, addPlan, updatePlan, deletePlan } from "../controllers/planController.js";

export const planRouter = Router();

planRouter.get("/", getPlans);
planRouter.post("/", addPlan);
planRouter.put("/:id", updatePlan);
planRouter.delete("/:id", deletePlan);