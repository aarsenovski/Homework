const fs = require("fs");

const writeFile = (name, data) => {
  return new Promise((success, fail) => {
    fs.writeFile(name, data, (err) => {
      if (err) return fail(err);
      else return success;
    });
  });
};

const appendFile = (name, data) => {
  return new Promise((success, rejected) => {
    fs.appendFile(name, data, (err) => {
      if (err) throw rejected(err);
      else return success;
    });
  });
};

const readFile = (name) => {
  return new Promise((success, fail) => {
    fs.readFile(name, "utf-8", (err, data) => {
      if (err) return fail(err);
      else return success(data);
    });
  });
};

module.exports = {
  writeFile,
  appendFile,
  readFile,
};
