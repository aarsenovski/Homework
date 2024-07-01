const http = require("http");
const url = require("url");
const { handleUser } = require("./handler/handler");

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  console.log(parsedUrl);

  if (parsedUrl.pathname == "/user") {
    handleUser(req, res, parsedUrl.query.username);
  }
  res.end();
});
server.listen(3000, () => {
  console.log("Server started at port 3000");
});
