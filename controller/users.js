const md5 = require("md5");
const {users} = require("../db/index");
const { extractUser} = require("../utility");

function Init(app) {
    // app.get("/user", async function (request, response) {
    //     const user = await db.models.users.findAll({});
    //     response.status(200).send(user);
    // });

    app.post("/auth/signup", async function (request, response) {
        const { body } = request;
        const {fName, lName, email, password} = body;

        const createdUser = await users.create({
            fName, 
            lName, 
            email, 
            password: md5(password),
        });

        const extractedUser = extractUser(createdUser);
        response.status(201).send(extractedUser);
    });

}

module.exports = {
    Init,
};