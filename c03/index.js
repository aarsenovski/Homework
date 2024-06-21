const { printMyName, showCurrentTime } = require("./test-andrej.js");

const { writeFile, appendFile, readFile } = require("./test-andrej2.js");

printMyName("Andrej");
showCurrentTime();

// Write, append, read functions
writeFile("data.txt", "ova e random tekst22");
appendFile(
  "data.txt",
  `\n\some additional text from the append \n\Ime: Andrej \n\Godini: 29 \n\Grad: Skopje`
);
readFile("data.txt")
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

// Callbacks
callbackFn = (fn, name) => {
  fn(name);
};
printCarName = (name) => {
  console.log(name);
};
printDogName = (name) => {
  console.log(name);
};

callbackFn(printCarName, "Mercedes");
callbackFn(printDogName, "Lara");

// Promises
let areYouMilennial = (yourAge) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (yourAge >= 1981 && yourAge <= 1996) {
        return resolve("You are a milenial");
      } else return reject("You are not a milenial");
    });
  });
};

// call the function with async/await and try/catch block
let milenialOrNot = async (yourAge) => {
  try {
    const approval = await areYouMilennial(yourAge);
    console.log(approval);
  } catch (error) {
    console.log(error);
  }
};

milenialOrNot(1974);
milenialOrNot(1994);
