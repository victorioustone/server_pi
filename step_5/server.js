const express = require('express');
const cors = require('cors');
// const mongodb = require('mongodb');
const mongoose = require('mongoose');
const config = require('./db');
const PORT = 4000;

// Контроллеры
const employeeController = require('./controllers/employees/index.js')
const gradeController = require('./controllers/grades/index')
const employee_skills_with_gradesController = require('./controllers/employees_skills_with_grades/index')
const memberController = require('./controllers/members/index')
const projectController = require('./controllers/projects/index')
const skillController = require('./controllers/skills/index')
const skill_with_gradeController = require('./controllers/skills_with_grades/index')
const vacancyController = require('./controllers/vacancies/index')

const app = express();
app.use(cors())
app.use(express.json())

mongoose
  .connect(config.DB)
  .then(() =>
    app.listen(PORT, () =>
      console.log(`Server running on http://localhost:${PORT}`)
    )
  )
  .catch(error => {
    throw error
  })

app.get('/', function(req, res) {
    res.json({"hello": "world"});
});

// Employee
// // как правильно
// app.get('/createEmployee/:employee', employeeController.createEmployee);
app.get('/createEmployee', employeeController.createEmployee);
app.get('/employees', employeeController.getEmployees);
app.get('/employeeById/:_id', employeeController.getEmployeeById);
app.get('/deleteEmployeeById/:_id', employeeController.deleteEmployeeById);
app.get('/deleteEmployees', employeeController.deleteAllEmployees);

// Grade
// app.get('/createGrade/:grade', gradeController.createGrade);
app.get('/createGrade', gradeController.createGrade);
app.get('/grades', gradeController.getGrades);
app.get('/gradeById/:_id', gradeController.getGradeById);
app.get('/deleteGradeById/:_id', gradeController.deleteGradeById );
app.get('/deleteGrades', gradeController.deleteAllGrades );

// Employee_Skills_With_Grades
// app.get('/createEmployee_Skills_With_Grades/:employee_skills_with_grades', employee_skills_with_gradesController.createEmployee_Skills_With_Grades);
app.get('/createEmployee_Skills_With_Grades', employee_skills_with_gradesController.createEmployee_Skills_With_Grades);
app.get('/employees_skills_with_grades', employee_skills_with_gradesController.getEmployees_Skills_With_Grades);
app.get('/getEmployee_Skills_With_GradesById/:_id', employee_skills_with_gradesController.getEmployee_Skills_With_GradesById);
app.get('/deleteEmployee_Skills_With_GradesById/:_id', employee_skills_with_gradesController.deleteEmployee_Skills_With_GradesById );
app.get('/deleteAllEmployees_Skills_With_Grades', employee_skills_with_gradesController.deleteAllEmployees_Skills_With_Grades );

// Member
// app.get('/createMember/:member', memberController.createMember);
app.get('/createMember', memberController.createMember);
app.get('/members', memberController.getMembers);
app.get('/memberById/:_id', memberController.getMemberById);
app.get('/deleteMemberById/:_id', memberController.deleteMemberById );
app.get('/deleteMembers', memberController.deleteAllMembers );

// Project
// app.get('/createProject/:project', projectController.createProject);
app.get('/createProject', projectController.createProject);
app.get('/projects', projectController.getProjects);
app.get('/projectById/:_id', projectController.getProjectById);
app.get('/deleteProjectById/:_id', projectController.deleteProjectById );
app.get('/deleteProjects', projectController.deleteAllProjects );

// Skill
// app.get('/createSkill/:skill', skillController.createSkill);
app.get('/createSkill', skillController.createSkill);
app.get('/skills', skillController.getSkills);
app.get('/skillById/:_id', skillController.getSkillById);
app.get('/deleteSkillById/:_id', skillController.deleteSkillById );
app.get('/deleteSkills', skillController.deleteAllSkills );

// Skill_With_Grade
// app.get('/createSkill_With_Grade/:skill_with_grade', skill_with_gradeController.createSkill_With_Grade);
app.get('/createSkill_With_Grade', skill_with_gradeController.createSkill_With_Grade);
app.get('/skills_with_grades', skill_with_gradeController.getSkill_With_Grade);
app.get('/skill_with_gradeById/:_id', skill_with_gradeController.getSkill_With_GradeById);
app.get('/deleteSkill_With_GradeById/:_id', skill_with_gradeController.deleteSkill_With_GradeById );
app.get('/deleteSkills_With_Grades', skill_with_gradeController.deleteAllSkills_With_Grades );

// Vacancy
// app.get('/createVacancy/:vacancy', vacancyController.createVacancy);
app.get('/createVacancy', vacancyController.createVacancy);
app.get('/vacancies', vacancyController.getVacancies);
app.get('/vacancyById/:_id', vacancyController.getVacancyById);
app.get('/deleteVacancyById/:_id', vacancyController.deleteVacancyById );
app.get('/deleteVacancies', vacancyController.deleteAllVacancies );