const express = require("express");
const {
  getStudentForm,
  postStudentForm,
  getAllStudents,
  deleteStudent,
} = require("./handlers/students");

const app = express();
app.use(express.urlencoded({ extended: true }));

app.get("/", getStudentForm);
app.post("/", postStudentForm);
app.get("/students", getAllStudents);
app.delete("/deletestudent/:studentIndex", deleteStudent);
// app.get("/students", getAllStudents);

app.listen(3000, () => console.log("Server is up and running!"));
