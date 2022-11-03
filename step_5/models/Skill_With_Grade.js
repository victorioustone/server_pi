const { ObjectId } = require('mongodb');
const mongoose = require('mongoose');

const skill_with_gradeSchema = new mongoose.Schema({
    skill_id: {
        type: ObjectId,
        required: false
    },
    skill_grade: {
        type: Number,
        required: true
    },
}
    , {
        versionKey: false // You should be aware of the outcome after set to false
    })

exports.Skill_With_grade = mongoose.model('Skill_With_grade', skill_with_gradeSchema);

// CREATE TABLE `Skills_With_Grades` (
//     `id` int PRIMARY KEY NOT NULL AUTO_INCREMENT,
//     `skill_id` int,
//     `skill_grade` int NOT NULL
//   );