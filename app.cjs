const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json())

app.get('/api/courses', (req, res) => {
    // Fetch courses from the database or any data source
    const courses = [
        { id: 1, name: 'Math 101', professor: 'Dr. Smith', grade: 'A', units: 4 },
        { id: 2, name: 'History 201', professor: 'Dr. Brown', grade: 'B+', units: 3 },
        // Add more courses as needed
    ];
    res.json(courses);
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));