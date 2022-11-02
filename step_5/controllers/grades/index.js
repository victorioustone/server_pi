const mongoose = require('mongoose')
var async = require("async");
const GradeModel = require('../../models/Grade')

// считываем dummy-data
const {grade} = require('../../dummy_data/db')

Grade = GradeModel.Grade
exports.createGrade = async function (req, res) {
    const new_grade = new Grade({
        grade_name: grade.grade_name,
        grade: grade.grade,
    });

    // // как правильно
    // const new_grade = new Grade({
    //     grade_name: req.params.grade.grade_name,
    //     grade: req.params.grade.grade,
    // });
    new_grade.save().then(() => {
        res
            .status(201)
            .json({ message: "Grade added", grade: new_grade.grade_name + " " + new_grade.grade })
    })

}

exports.getGrades = async function (req, res) {
    const grades = await Grade.find()
    grades.forEach(element => {
        console.log(element._id)
    });
    res
        .status(200)
        .json({ message: "Grades", grades: grades })
}

exports.getGradeById = async function (req, res) {
    const grade = await Grade.findOne({ _id: req.params._id }).exec()
        .then(console.log(req.params._id, ' has been found'))
        .catch(error => { throw error })
    res
        .status(200)
        .json({ message: "Grade", grades: grade.grade_name + " " + grade.grade })
}

exports.deleteGradeById = async function (req, res) {
    Grade.deleteOne({ _id: req.params._id }).exec()
    .then(console.log(req.params._id, ' has been deleted'))
    .catch(error => { throw error })
    res
    .status(200)
    .json({ message: "Grade has been deleted" })
}

exports.deleteAllGrades = async function (req, res) {
    const grades = await Grade.find()
    grades.forEach(element => {
        Grade.deleteOne({ _id: element._id }).exec()
    });
    res
        .status(200)
        .json({ message: "Grades", grades: [] })
}
