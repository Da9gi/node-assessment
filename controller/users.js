const md5 = require("md5");
const {db} = require("../db/index");

function Init(app) {
    // app.get("/user", async function (request, response) {
    //     const user = await db.models.users.findAll({});
    //     response.status(200).send(user);
    // });

    app.post("/auth/signup", async function (request, response) {
        const { body } = request;
        const {fName, lName, email, password} = body;

        const createdUser = await db.models.users.create({
            fName, 
            lName, 
            email, 
            password: md5(password),
        });

        const { password: Password, ...extractedUser } = JSON.parse(
            JSON.stringify(createdUser)
          );

        response.status(201).send(extractedUser);
    });

}

module.exports = {
    Init,
};