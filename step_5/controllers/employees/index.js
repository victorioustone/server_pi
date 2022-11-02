const mongoose = require('mongoose')
var async = require("async");
const EmployeeModel = require('../../models/Employee')

// считываем dummy-data
const {employee} = require('../../dummy_data/db')

Employee = EmployeeModel.Employee
exports.createEmployee = async function (req, res) {
    const new_employee = new Employee({
        status: employee.status,
        first_name: employee.first_name,
        last_name: employee.last_name,
        skill_id: employee.skill_id,
        grade_id: employee.grade_id,
    });

    // // как правильно
    // const new_employee = new Employee({
    //     status: req.params.employee.status,
    //     first_name: req.params.employee.first_name,
    //     last_name: req.params.employee.last_name,
    //     skill_id: req.params.employee.skill_id,
    //     grade_id: req.params.employee.grade_id,
    // });
    new_employee.save().then(() => {
        res
            .status(201)
            .json({ message: "Employee added", user: new_employee.first_name })
    })

}

exports.getEmployees = async function (req, res) {
    const employees = await Employee.find()
    employees.forEach(element => {
        console.log(element._id)
    });
    res
        .status(200)
        .json({ message: "Employees", users: employees })
}

exports.getEmployeeById = async function (req, res) {
    const employee = await Employee.findOne({ _id: req.params._id }).exec()
        .then(console.log(req.params._id, ' has been found'))
        .catch(error => { throw error })
    res
        .status(200)
        .json({ message: "Employee", users: employee.first_name })
}

exports.deleteEmployeeById = async function (req, res) {
    Employee.deleteOne({ _id: req.params._id }).exec()
    .then(console.log(req.params._id, ' has been deleted'))
    .catch(error => { throw error })
    res
    .status(200)
    .json({ message: "Employee has been deleted" })
}

exports.deleteAllEmployees = async function (req, res) {
    const employees = await Employee.find()
    employees.forEach(element => {
        Employee.deleteOne({ _id: element._id }).exec()
    });
    // employees = await Employee.find()
    res
        .status(200)
        .json({ message: "Employees", users: [] })
}
