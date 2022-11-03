const { ObjectId } = require('mongodb');
const mongoose = require('mongoose');

const skillSchema = new mongoose.Schema({
    skill_id: {
        type: ObjectId,
        required: false
    },
    skill_name: {
        type: String,
        required: true
    },
}
    , {
        versionKey: false // You should be aware of the outcome after set to false
    })

exports.Skill = mongoose.model('Skill', skillSchema);

// CREATE TABLE `Skills` (
//     `skill_id` int PRIMARY KEY NOT NULL AUTO_INCREMENT,
//     `skill_name` varchar(255) NOT NULL
//   );