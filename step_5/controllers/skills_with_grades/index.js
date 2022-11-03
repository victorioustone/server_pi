const mongoose = require('mongoose')
var async = require("async");
const Skill_With_GradeModel = require('../../models/Skill_With_Grade')

// считываем dummy-data
const {skill_with_grade} = require('../../dummy_data/db')

Skill_With_GradeModel.Skill_With_Grade = Skill_With_GradeModel.Skill_With_Grade
exports.createSkill_With_Grade = async function (req, res) {
    const new_skill_with_grade = new Skill_With_Grade({
        skill_id: skill_with_grade.skill_id,
        skill_grade: skill_with_grade.skill_grade,
    });

    // // как правильно
    // const new_skill_with_grade = new Skill_With_Grade({
    //     skill_id: req.params.skill_with_grade.skill_id,
    //     skill_grade: req.params.skill_with_grade.skill_grade,
    // });

    new_skill_with_grade.save().then(() => {
        res
            .status(201)
            .json({ message: "Skill_With_Grade added", user: new_skill_with_grade.skill_id })
    })

}

exports.getSkill_With_Grade = async function (req, res) {
    const skills_with_grades = await Skill_With_Grade.find()
    skills_with_grades.forEach(element => {
        console.log(element._id)
    });
    res
        .status(200)
        .json({ message: "Skill_With_Grade", users: skills_with_grades })
}

exports.getSkill_With_GradeById = async function (req, res) {
    const skills_with_grades = await Skill_With_Grade.findOne({ _id: req.params._id }).exec()
        .then(console.log(req.params._id, ' has been found'))
        .catch(error => { throw error })
    res
        .status(200)
        .json({ message: "Skill_With_Grade", users: skills_with_grades.skill_id })
}

exports.deleteSkill_With_GradeById = async function (req, res) {
    Skill_With_Grade.deleteOne({ _id: req.params._id }).exec()
    .then(console.log(req.params._id, ' has been deleted'))
    .catch(error => { throw error })
    res
    .status(200)
    .json({ message: "Skill_With_Grade has been deleted" })
}

exports.deleteAllSkills_With_Grades = async function (req, res) {
    const skills_with_grades = await Skill_With_Grade.find()
    skills_with_grades.forEach(element => {
        Skill_With_Grade.deleteOne({ _id: element._id }).exec()
    });
    // skills_with_grades = await Skill_With_Grade.find()
    res
        .status(200)
        .json({ message: "SKill_With_Grade", users: [] })
}
