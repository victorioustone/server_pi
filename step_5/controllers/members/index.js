const mongoose = require('mongoose')
var async = require("async");
const MemberModel = require('../../models/Member')

// считываем dummy-data
const {member} = require('../../dummy_data/db')

Member = MemberModel.Member
exports.createMember = async function (req, res) {
    const new_member = new Member({
        employee_id: member.employee_id,
        project_id: member.project_id,
        datetime_start: member.datetime_start,
        datetime_end: member.datetime_end,
    });

    // // как правильно
    // const new_member = new Member({
    //     employee_id: req.params.member.employee_id,
    //     project_id: req.params.member.project_id,
    //     datetime_start: req.params.member.datetime_start,
    //     datetime_end: req.params.member.datetime_end,
    // });

    new_member.save().then(() => {
        res
            .status(201)
            .json({ message: "Member added", user: new_member.employee_id })
    })

}

exports.getMembers = async function (req, res) {
    const members = await Member.find()
    members.forEach(element => {
        console.log(element._id)
    });
    res
        .status(200)
        .json({ message: "Members", users: members })
}

exports.getMemberById = async function (req, res) {
    const member = await Member.findOne({ _id: req.params._id }).exec()
        .then(console.log(req.params._id, ' has been found'))
        .catch(error => { throw error })
    res
        .status(200)
        .json({ message: "Member", users: member.employee_id })
}

exports.deleteMemberById = async function (req, res) {
    Member.deleteOne({ _id: req.params._id }).exec()
    .then(console.log(req.params._id, ' has been deleted'))
    .catch(error => { throw error })
    res
    .status(200)
    .json({ message: "Member has been deleted" })
}

exports.deleteAllMembers = async function (req, res) {
    const members = await Member.find()
    members.forEach(element => {
        Member.deleteOne({ _id: element._id }).exec()
    });
    // members = await Members.find()
    res
        .status(200)
        .json({ message: "Members", users: [] })
}
