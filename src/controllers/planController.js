import { queryGetAllPlans, queryAddPlan, queryUpdatePlan, queryDeletePlan } from "../database/planQueries.js";

export async function getPlans(req, res) {
    const { userID } = req.query;
    try {
        const plans = await queryGetAllPlans(userID);
        res.json(plans);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Error fetching plans");
    }
}

export async function addPlan(req, res) {
    const { id, name, startterm, startyear, endterm, endyear, system, summer, defaultplan, userid, timecreated } = req.body;
    try {
        await queryAddPlan(id, name, startterm, startyear, endterm, endyear, system, summer, defaultplan, userid, timecreated);
        res.status(201).send("Plan added successfully");
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Error adding plan");
    }
}

export async function updatePlan(req, res) {
    const { id } = req.params;
    const { name, startterm, startyear, endterm, endyear, system, summer, defaultplan } = req.body;
    try {
        await queryUpdatePlan(name, startterm, startyear, endterm, endyear, system, summer, defaultplan, id);
        res.status(200).send("Plan updated successfully");
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Error updating plan");
    }
}

export async function deletePlan(req, res) {
    const { id } = req.params;
    try {
        await queryDeletePlan(id);
        res.status(204).send("Plan deleted successfully");
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Error deleting plan");
    }
}
