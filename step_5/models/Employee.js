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