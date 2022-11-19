const mongoose = require('mongoose')
var async = require("async");
const ProjectModel = require('../../models/Project')

// считываем dummy-data
const {project} = require('../../dummy_data/db')

Project = ProjectModel.Project 
exports.createProject = async function (req, res) {
    const new_project = new Project ({
        project_name: project.project_name,
        project_leader_id: project.project_leader_id,
        team_lead_id: project.team_lead_id,
    });

    // // как правильно
    // const new_project = new Project({
    //     project_name: req.params.project.project_name,
    //     project_leader_id: req.params.project.project_leader_id,
    //     team_lead_id: req.params.project.team_lead_id,
    // });

    new_project.save().then(() => {
        res
            .status(201)
            .json({ message: "Project added", user: new_project.project_name })
    })

}

exports.getProjects = async function (req, res) {
    const projects = await Project.find()
    projects.forEach(element => {
        console.log(element._id)
    });
    res
        .status(200)
        .json({ message: "Projects", users: projects })
}

exports.getProjectById = async function (req, res) {
    const project = await Project.findOne({ _id: req.params._id }).exec()
        .then(console.log(req.params._id, ' has been found'))
        .catch(error => { throw error })
    res
        .status(200)
        .json({ message: "Project", users: project.project_name })
}

exports.deleteProjectById = async function (req, res) {
    Project.deleteOne({ _id: req.params._id }).exec()
    .then(console.log(req.params._id, ' has been deleted'))
    .catch(error => { throw error })
    res
    .status(200)
    .json({ message: "Project has been deleted" })
}

exports.deleteAllProjects = async function (req, res) {
    const projects = await Project.find()
    projects.forEach(element => {
        Project.deleteOne({ _id: element._id }).exec()
    });
    // projects = await Projects.find()
    res
        .status(200)
        .json({ message: "Projects", users: [] })
}
