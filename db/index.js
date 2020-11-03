const { Sequelize } = require("sequelize");

const db = new Sequelize({
    dialect: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "thinksys@123",
    database: "node-assessment",
    sync: true,
});

const users = require("./models/users")(db);
const blogs = require("./models/blogs")(db);
const bookmarks = require("./models/bookmarks")(db);

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
    bookmarks,
};
