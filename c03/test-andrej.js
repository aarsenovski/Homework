printMyName = (name) => {
  console.log(`Hi ${name}`);
};

showCurrentTime = () => {
  const date = new Date();
  console.log(date);
};

module.exports = {
  //export na local module koj sami sme go kreirale
  printMyName,
  showCurrentTime,
};
