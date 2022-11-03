const { ObjectId } = require('mongodb');
const mongoose = require('mongoose');

const employee_Skills_With_GradesSchema = new mongoose.Schema({
    Skills_With_Grades_skill_id: {
        type: ObjectId,
        required: false
    },
}
    , {
        versionKey: false // You should be aware of the outcome after set to false
    })

exports.Employee_Skills_With_Grades = mongoose.model('Employee_Skills_With_Grades', employee_Skills_With_GradesSchema);

// CREATE TABLE `Employees_Skills_With_Grades` (
//     `Employees_id` int,
//     `Skills_With_Grades_skill_id` int
//   );