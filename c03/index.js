const { printMyName, showCurrentTime } = require("./test-andrej.js");

const { writeFile, appendFile, readFile } = require("./test-andrej2.js");

printMyName("Andrej");
showCurrentTime();

writeFile("data.txt", "ova e random tekst22");
appendFile("data.txt", `\n\some additional text from the append`);
readFile("data.txt")
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
