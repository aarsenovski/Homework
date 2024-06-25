const http = require("http");
const url = require("url");

const {
  convertMilesToKm,
  convertCelsiusToFahrenheit,
  convertFtToM,
  convertLbsToKg,
} = require("./conversion");

const handler = (req, res) => {
  const url = req.url;
  const [, conversionType, number] = url.split("/");

  let result;
  switch (conversionType) {
    case "convertMilesToKm":
      result = convertMilesToKm(Number(number));
      res.end(
        `Conversion: ${number} miles equals ${result.toString()} kilometers`
      );
      break;
    // have to have a break after each case
    case "convertCelsiusToFahrenheit":
      result = convertCelsiusToFahrenheit(Number(number));
      res.end(
        `Conversion: ${number} celsius equals ${result.toString()} fahrenheit`
      );
      break;
    // have to have a break after each case
    case "convertFtToM":
      result = convertFtToM(Number(number));
      res.end(`Conversion: ${number} feet equals ${result.toString()} meters`);
      break;
    // have to have a break after each case
    case "convertLbsToKg":
      result = convertLbsToKg(Number(number));
      res.end(
        `Conversion: ${number} pounds equals ${result.toString()} kilograms`
      );
      break;
    // have to have a break after each case
    default:
      res.end("Welcome to the conversion site");
  }
};

const server = http.createServer(handler);
server.listen(10001);
console.log("Server started");
