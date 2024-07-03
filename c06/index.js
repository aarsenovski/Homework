const express = require("express");
const { handleUser } = require("./handler/handler");

const app = express();
app.get("/user", handleUser);

app.listen(3000, () => {
  console.log(`Server started at port 3000`);
});
