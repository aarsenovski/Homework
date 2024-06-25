const http = require("http");
const url = require("url");

const handler = (req, res) => {
  const url = req.url;
  console.log("url", url);

  const [, operacija, numberOne, numberTwo] = url.split("/");
  let result = "";

  switch (operacija) {
    case "sobiranje":
      result = Number(numberOne) + Number(numberTwo);
      res.end(result.toString());
      break;
    case "odzemanje":
      result = Number(numberOne) - Number(numberTwo);
      res.end(result.toString());
      break;
    case "mnozenje":
      result = Number(numberOne) * Number(numberTwo);
      res.end(result.toString());
      break;
    case "delenje":
      result = Number(numberOne) / Number(numberTwo);
      res.end(result.toString());
      break;
    default:
      res.end("Welcome to calculator app");
  }
};

const server = http.createServer(handler);
server.listen(10000);
console.log("Server started");
