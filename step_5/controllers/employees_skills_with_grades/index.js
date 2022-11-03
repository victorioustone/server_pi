const mongoose = require('mongoose')
var async = require("async");
const Employee_Skills_With_GradesModel = require('../../models/Employee_Skills_With_Grades')

// считываем dummy-data
const {employee_skills_with_grades} = require('../../dummy_data/db')

Employee_Skills_With_GradesModel.Employee_Skills_With_Grades = Employee_Skills_With_GradesModel.Employee_Skills_With_Grades
exports.createEmployee_Skills_With_Grades = async function (req, res) {
    const new_employee_skills_with_grades = new Employee_Skills_With_Grades({
        skills_with_grades_skill_id: employee_skills_with_grades.skills_with_grades_skill_id,
    });

    // // как правильно
    // const new_employee_skills_with_grades = new Employee_Skills_With_Grades({
    //     skills_with_grades_skill_id: req.params.employee_skills_with_grades.skills_with_grades_skill_id,
    // });

    new_employee_skills_with_grades.save().then(() => {
        res
            .status(201)
            .json({ message: "Employee_Skills_With_Grades added", user: new_employee_skills_with_grades.first_name })
    })

}

exports.getEmployees_Skills_With_Grades = async function (req, res) {
    const employees_skills_with_grades = await Employee_Skills_With_Grades.find()
    employees_skills_with_grades.forEach(element => {
        console.log(element._id)
    });
    res
        .status(200)
        .json({ message: "Employees_Skills_With_Grades", users: employees_skills_with_grades })
}

exports.getEmployee_Skills_With_GradesById = async function (req, res) {
    const employees_skills_with_grades = await Employee_Skills_With_Grades.findOne({ _id: req.params._id }).exec()
        .then(console.log(req.params._id, ' has been found'))
        .catch(error => { throw error })
    res
        .status(200)
        .json({ message: "Employee_Skills_With_Grades", users: employee_skills_with_grades.skills_with_grades_skill_id })
}

exports.deleteEmployee_Skills_With_GradesById = async function (req, res) {
    Employee_Skills_With_Grades.deleteOne({ _id: req.params._id }).exec()
    .then(console.log(req.params._id, ' has been deleted'))
    .catch(error => { throw error })
    res
    .status(200)
    .json({ message: "Employee_Skills_With_Grades has been deleted" })
}

exports.deleteAllEmployees_Skills_With_Grades = async function (req, res) {
    const employees_skills_with_grades = await Employee_Skills_With_Grades.find()
    employees_skills_with_grades.forEach(element => {
        Employee_Skills_With_Grades.deleteOne({ _id: element._id }).exec()
    });
    // employees_skills_with_grades = await Employee_Skills_With_Grades.find()
    res
        .status(200)
        .json({ message: "Employees_SKills_With_Grades", users: [] })
}
