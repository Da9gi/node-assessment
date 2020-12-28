const { Sequelize } = require("sequelize");
require("dotenv").config();

const db = new Sequelize({
    dialect: "postgres",
    host: process.env.HOST,
    port: process.env.PORT,
    username: process.env["USER_NAME"],
    password: process.env.PASSWORD,
    database: process.env.DBNAME,
    sync: true,
});

const users = require("./models/users")(db);
const blogs = require("./models/blogs")(db);
//const bookmarks = require("./models/bookmarks")(db);

const init = async function () {
    try {
        await db.authenticate();
        await db.sync({ alter: true });
    } catch (error) {
        console.log("db > init > ", error);
    }
};

module.exports = {
    init,
    db,
    blogs,
    users,
    // bookmarks,
};
