handleUser = (req, res, username) => {
  const usernamePattern2 = /^[A-Z]+.[\d]{4}$/; //ANDREJ_1994

  if (usernamePattern2.test(username)) {
    res.end(`Hello ${username}`);
  }
};

module.exports = {
  handleUser,
};

const patterns = {
  usernamePattern: /^[\w]{3,10}$/, //andrej_01
  emailPattern: /^([a-zA-Z\d]+)@([a-zA-Z\d]{3,10}).([a-z]{2,5})$/, // andrejarsenovski@gmail.com
  addressPattern: /^[a-zA-Z]{5,15}\s?[a-zA-Z]+? [\w]{5,15},[\d]{4}$/, //Partizanska Skopje,1000 //Markova Reka, Skopje,1050
  usernamePattern3: /^[a-z]{4,10}/,
  cityAndPostalCodePattern: /^[A-Z]{1}[a-z]+-[\d]{4}$/, //Skopje-1000
};
