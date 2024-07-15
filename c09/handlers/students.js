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

  let student = new Object();
  student.firstName = firstName;
  student.lastName = lastName;
  student.averageScore = averageScore;

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
};
