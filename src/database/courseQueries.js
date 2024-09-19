import { pool } from "./pool.js";

export async function queryGetAllCourses(plan) {
    const { rows } = await pool.query(
        `SELECT * FROM degreeplan 
        WHERE plan=$1
        ORDER BY key`, // Order by time created to persist display order
        [plan]
    );
    return rows;
}

export async function queryAddCourse(key, name, professor, grade, units, term, plan) {
    await pool.query(
        `INSERT INTO degreeplan (key, name, professor, grade, units, term, plan) 
        VALUES ($1, $2, $3, $4, $5, $6, $7)`, 
        [key, name, professor, grade, units, term, plan]
    );
}

export async function queryUpdateCourse(name, professor, grade, units, term, key) {
    await pool.query(
        `UPDATE degreeplan
        SET name=$1, professor=$2, grade=$3, units=$4, term=$5
        WHERE key=$6`,
        [name, professor, grade, units, term, key]
    );
}

export async function queryDeleteCourse(key) {
    await pool.query(
        `DELETE FROM degreeplan
        WHERE key=$1`,
        [key]
    );
}
