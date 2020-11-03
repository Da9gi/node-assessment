const Token = require("jsonwebtoken");

const SECRET_KEY = process.env.SIGNING_KEY;

function generateJWT(payload) {
  return Token.sign(payload, SECRET_KEY, { expiresIn: "2d" });
}

function extractUser(user) {
  const { password: Password, ...extractedUser } = JSON.parse(
    JSON.stringify(user)
  );
  return extractedUser;
}

module.exports = {
  SECRET_KEY,
  generateJWT,
  extractUser,
};