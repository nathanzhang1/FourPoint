import { pool } from "./pool.js";

export async function queryGetAllPlans(userid) {
    const { rows } = await pool.query(
        `SELECT * FROM planlist 
        WHERE userid=$1
        ORDER BY timecreated`, // Order by time created to persist display order
        [userid]
    );
    return rows;
}

export async function queryAddPlan(id, name, startterm, startyear, endterm, endyear, system, summer, defaultplan, userid, timecreated) {
    await pool.query(
        `INSERT INTO planlist (id, name, startterm, startyear, endterm, endyear, system, summer, defaultplan, userid, timecreated) 
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)`, 
        [id, name, startterm, startyear, endterm, endyear, system, summer, defaultplan, userid, timecreated]
    );
}

export async function queryUpdatePlan(name, startterm, startyear, endterm, endyear, system, summer, defaultplan, id) {
    await pool.query(
        `UPDATE planlist
        SET name=$1, startterm=$2, startyear=$3, endterm=$4, endyear=$5, system=$6, summer=$7, defaultplan=$8
        WHERE id=$9`,
        [name, startterm, startyear, endterm, endyear, system, summer, defaultplan, id]
    );
}

export async function queryDeletePlan(id) {
    await pool.query(
        `DELETE FROM planlist
        WHERE id=$1`,
        [id]
    );
}
