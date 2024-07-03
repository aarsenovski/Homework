const express = require("express");
const { handleUser } = require("./handler/handler");


  if (parsedUrl.pathname == "/user") {
    handleUser(req, res, parsedUrl.query.username);
  }
});
server.listen(3000, () => {
  console.log("Server started at port 3000");
});
