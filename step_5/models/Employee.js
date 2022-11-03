const { ObjectId } = require('mongodb');
const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
    status: {
        type: Boolean,
        required: true
    },
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    skill_id: {
        type: ObjectId,
        required: false
    },
    grade_id: {
        type: ObjectId,
        required: false
    },
}
    , {
        versionKey: false // You should be aware of the outcome after set to false
    })

exports.Employee = mongoose.model('Employee', employeeSchema);

// CREATE TABLE `Employees` (
//     `employee_id` int PRIMARY KEY NOT NULL AUTO_INCREMENT,
//     `status` boolean NOT NULL,
//     `first_name` varchar(100) NOT NULL,
//     `last_name` varchar(100) NOT NULL,
//     `skill_id` int,
//     `grade_id` int
//   );