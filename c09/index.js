const express = require("express");
const { getStudentForm, postStudentForm } = require("./handlers/students");

const app = express();
app.use(express.urlencoded({ extended: true }));

app.get("/", getStudentForm);
app.post("/", postStudentForm);
app.listen(3000, () => console.log("Server is up and running!"));
