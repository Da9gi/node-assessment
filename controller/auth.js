const { users } = require("../db/index");
const md5 = require("md5");
const { generateJWT, extractUser } = require("../utility");
const passport = require("passport");

function Init(app) {
    app.post("/AUTH/LOGIN", async function (request, response) {
        const { email, password } = request.body;
        const user = await users.findOne({ where: { email } });

        if (!user || user.password !== md5(password)) {
            response
                .status(401)
                .send({
                    message:
                        "Incorrect Login  Credentials \nUser Name or Password",
                });
        }

        const jwt = generateJWT(extractUser(user));

        response
            .status(200)
            .send({ JSON_Web_Token: jwt, user: extractUser(user) });
    });

    app.get(
        "/AUTH/USER",
        passport.authenticate("jwt", { session: false }),
        function (request, response) {
            response.send({ user: request.user });
        }
    );
}

module.exports = {
    Init,
};
