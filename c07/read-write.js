const fs = require("fs");
const read = async () => {
  return new Promise((resolve, reject) => {
    fs.readFile("myData.json", "utf-8", (err, data) => {
      if (err) {
        return reject(err);
      }
      data = JSON.parse(data); // od JSON vo objekt
      return resolve(data);
    });
  });
};

const write = async (data) => {
  return new Promise((resolve, reject) => {
    data = JSON.stringify(data); // od objekt vo jSON
    fs.writeFile("myData.json", data, (err) => {
      if (err) return reject(err);
      return resolve();
    });
  });
};

module.exports = {
  read,
  write,
};
