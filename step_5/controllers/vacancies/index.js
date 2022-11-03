const mongoose = require('mongoose')
var async = require("async");
const VacancyModel = require('../../models/Vacancy')

// считываем dummy-data
const {vacancy} = require('../../dummy_data/db')

Vacancy = VacancyModel.Skill
exports.createVacancy = async function (req, res) {
    const new_vacancy = new Vacancy({
        requienments: vacancy.requienments,
        member_id: vacancy.member_id,
        creator_id: vacancy.creator_id,
    });

    // // как правильно
    // const new_vacancy = new Vacancy({
    //     requienments: req.params.vacancy.requienments,
    //     member_id: req.params.vacancy.member_id,
    //     creator_id: req.params.vacancy.creator_id,
    // });

    new_vacancy.save().then(() => {
        res
            .status(201)
            .json({ message: "Vacancy added", user: new_vacancy.member_id })
    })

}

exports.getVacancies = async function (req, res) {
    const vacancies = await Vacancy.find()
    vacancies.forEach(element => {
        console.log(element._id)
    });
    res
        .status(200)
        .json({ message: "Vacancies", users: vacancies })
}

exports.getVacancyById = async function (req, res) {
    const vacancy = await Vacancy.findOne({ _id: req.params._id }).exec()
        .then(console.log(req.params._id, ' has been found'))
        .catch(error => { throw error })
    res
        .status(200)
        .json({ message: "Vacancy", users: vacancy.member_id })
}

exports.deleteVacancyById = async function (req, res) {
    Vacancy.deleteOne({ _id: req.params._id }).exec()
    .then(console.log(req.params._id, ' has been deleted'))
    .catch(error => { throw error })
    res
    .status(200)
    .json({ message: "Vacancy has been deleted" })
}

exports.deleteAllVacancies = async function (req, res) {
    const vacancies = await Vacancy.find()
    vacancies.forEach(element => {
        Vacancy.deleteOne({ _id: element._id }).exec()
    });
    // vacancies = await Vacansies.find()
    res
        .status(200)
        .json({ message: "Vacancies", users: [] })
}
