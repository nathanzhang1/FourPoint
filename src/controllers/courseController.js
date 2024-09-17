import { queryGetAllCourses, queryAddCourse, queryUpdateCourse, queryDeleteCourse } from "../database/courseQueries.js";

export async function getCourses(req, res) {
    const { term, plan } = req.query;
    try {
        const courses = await queryGetAllCourses(term, plan);
        res.json(courses);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Error fetching courses");
    }
}

export async function addCourse(req, res) {
    const { key, name, professor, grade, units, term, plan } = req.body;
    try {
        await queryAddCourse(key, name, professor, grade, units, term, plan);
        res.status(201).send("Course added successfully");
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Error adding course");
    }
}

export async function updateCourse(req, res) {
    const { key } = req.params;
    const { name, professor, grade, units, term } = req.body;
    try {
        await queryUpdateCourse(name, professor, grade, units, term, key);
        res.status(200).send("Course updated successfully");
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Error updating course");
    }
}

export async function deleteCourse(req, res) {
    const { key } = req.params;
    try {
        await queryDeleteCourse(key);
        res.status(204).send("Course deleted successfully");
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Error deleting course");
    }
}
