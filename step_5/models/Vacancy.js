const { ObjectId } = require('mongodb');
const mongoose = require('mongoose');

const vacancySchema = new mongoose.Schema({
    requienments: {
        type: String,
        required: true
    },
    member_id: {
        type: ObjectId,
        required: false
    },
    creator_id: {
        type: ObjectId,
        required: false
    },
}
    , {
        versionKey: false // You should be aware of the outcome after set to false
    })

exports.Vacancy = mongoose.model('Vacancy', vacancySchema);

// CREATE TABLE `Vacancies` (
//     `vacancy_id` int PRIMARY KEY NOT NULL AUTO_INCREMENT,
//     `requienments` varchar(255) NOT NULL,
//     `member_id` int,
//     `creator_id` int
//   );