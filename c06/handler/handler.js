const handleUser = (req, res) => {
  const usernamePattern2 = /^[A-Z]+\.[0-9]{4}$/; //ANDREJ.1994
  const { username } = req.query;

  if (usernamePattern2.test(username)) {
    res.send(`Hello ${username}`);
  } else {
    res.send("Invalid username");
  }
};

module.exports = {
  handleUser,
};
