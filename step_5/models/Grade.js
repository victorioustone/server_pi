const { ObjectId } = require('mongodb');
const mongoose = require('mongoose');

const gradeSchema = new mongoose.Schema({
    grade_name: {
        type: String,
        required: true
    },
    grade: {
        type: Number,
        required: true
    }
}
    , {
        versionKey: false // You should be aware of the outcome after set to false
    })

exports.Grade = mongoose.model('Grade', gradeSchema);