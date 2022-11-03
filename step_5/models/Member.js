const { ObjectId } = require('mongodb');
const mongoose = require('mongoose');

const memberSchema = new mongoose.Schema({
    employee_id: {
        type: ObjectId,
        required: false
    },
    project_id: {
        type: ObjectId,
        required: false
    },
    datetime_start: {
        type: Date,
        required: true
    },
    datetime_end: {
        type: Date,
        required: true
    },
}
    , {
        versionKey: false // You should be aware of the outcome after set to false
    })

exports.Member = mongoose.model('Member', memberSchema);

// CREATE TABLE `Members` (
//     `member_id` int PRIMARY KEY NOT NULL AUTO_INCREMENT,
//     `employee_id` int,
//     `project_id` int,
//     `datetime_start` timestamp,
//     `datetime_end` timestamp
//   );