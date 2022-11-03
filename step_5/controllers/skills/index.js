const mongoose = require('mongoose')
var async = require("async");
const SkillModel = require('../../models/Skill')

// считываем dummy-data
const {skill} = require('../../dummy_data/db')

Skill = SkillModel.Skill
exports.createSkill = async function (req, res) {
    const new_skill = new Skill({
        skill_name: skill.skill_name,
    });

    // // как правильно
    // const new_skill = new Skill({
    //     skill_name: req.params.skill.skill_name,
    // });

    new_skill.save().then(() => {
        res
            .status(201)
            .json({ message: "Skill added", user: new_skill.skill_name })
    })

}

exports.getSkills = async function (req, res) {
    const skills = await Skill.find()
    skills.forEach(element => {
        console.log(element._id)
    });
    res
        .status(200)
        .json({ message: "Skills", users: skills })
}

exports.getSkillById = async function (req, res) {
    const skill = await Skill.findOne({ _id: req.params._id }).exec()
        .then(console.log(req.params._id, ' has been found'))
        .catch(error => { throw error })
    res
        .status(200)
        .json({ message: "Skill", users: skill.skill_name })
}

exports.deleteSkillById = async function (req, res) {
    Skill.deleteOne({ _id: req.params._id }).exec()
    .then(console.log(req.params._id, ' has been deleted'))
    .catch(error => { throw error })
    res
    .status(200)
    .json({ message: "Skill has been deleted" })
}

exports.deleteAllSkills = async function (req, res) {
    const skills = await Skill.find()
    skills.forEach(element => {
        Skill.deleteOne({ _id: element._id }).exec()
    });
    // skills = await Skills.find()
    res
        .status(200)
        .json({ message: "Skills", users: [] })
}
