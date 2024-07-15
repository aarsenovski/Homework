const { read, write } = require("../read-write");
const fs = require("fs");

const getStudentForm = async (req, res) => {
  try {
    let output = await parseTemplate("studentForm");
    res.status(200).send(output);
  } catch (err) {
    console.log(err);
    res.status(500).send("Invalid Server Error!");
  }
};

const postStudentForm = async (req, res) => {
  const { firstName, lastName, averageScore } = req.body;

  const student = {
    firstName,
    lastName,
    averageScore,
  };
  // can do this since key and value are the same in this case
  try {
    console.log(student);
    const students = await read();
    students.push(student);
    await write(students);
  } catch (err) {
    console.log(err);
    return res.status(500).send("Invalid Server Error!");
  }
};

const getAllStudents = async (req, res) => {
  const students = await read();
  console.log(students);
  let output = await parseTemplate("students", {});
};

const deleteStudent = async (req, res) => {
  const studentIndex = req.params.studentIndex;
  let students = await read();
  students = students.filter(
    (student, index) => index !== Number(studentIndex)
  );
  console.log(students);
  await write();
  res.status(200).send("Student deleted");
};

const parseTemplate = async (template, data = null) => {
  return new Promise((resolve, reject) => {
    fs.readFile(
      `${__dirname}/../views/${template}.html`,
      "utf-8",
      (err, content) => {
        if (err) reject(err);

        if (data) {
          for (d in data) {
            content = content.replace(`{{${d}}}`, data[d]);
          }
        }

        return resolve(content);
      }
    );
  });
};

module.exports = {
  getStudentForm,
  postStudentForm,
  getAllStudents,
  deleteStudent,
};
