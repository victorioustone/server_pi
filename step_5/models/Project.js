const { ObjectId } = require('mongodb');
const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    project_name: {
        type: String,
        required: true
    },
    project_leader_id: {
        type: ObjectId,
        required: false
    },
    team_lead_id: {
        type: ObjectId,
        required: false
    },
}
    , {
        versionKey: false // You should be aware of the outcome after set to false
    })

exports.Project = mongoose.model('Project', projectSchema);

// CREATE TABLE `Projects` (
//     `project_id` int PRIMARY KEY NOT NULL AUTO_INCREMENT,
//     `project_name` varchar(255) NOT NULL,
//     `project_leader_id` int NOT NULL,
//     `team_lead_id` int NOT NULL
//   );