const express = require('express');
const cors = require('cors');
// const mongodb = require('mongodb');
const mongoose = require('mongoose');
const config = require('./db');
const PORT = 4000;

// Контроллеры
const employeeController = require('./controllers/employees/index.js')
const gradeController = require('./controllers/grades/index')

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