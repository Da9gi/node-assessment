const { Sequelize} = require("sequelize");

module.exports = function (db) {
    return db.define(
        "blogs",
        {
            id: {
                primaryKey: true,
                autoIncrement: true,
                type: Sequelize.INTEGER,
                unique: true,
            },
            blogName: {
                defaultValue: "Blog Demo",
                allowNull: false,
                type: Sequelize.STRING,
            },
            author: {
                defaultValue: "author",
                allowNull: false,
                type: Sequelize.STRING,
            },
            blogDescription: {
                defaultValue: "Blog Description",
                allowNull: false,
                type: Sequelize.TEXT,
            },
        },
        { createdAt: false, updatedAt: false }
    );
};


