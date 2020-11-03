const { Sequelize} = require("sequelize");

module.exports = function (db) {
    return db.define(
        "users",
        {
            id: {
                primaryKey: true,
                autoIncrement: true,
                type: Sequelize.INTEGER,
                unique: true,
            },
            fName: {
                defaultValue: "first name",
                allowNull: false,
                type: Sequelize.STRING,
            },
            lName: {
                defaultValue: "last name",
                allowNull: false,
                type: Sequelize.STRING,
            },
            email: {
                allowNull: false,
                type: Sequelize.STRING,
                unique: true,
              },
            password: {
                allowNull: false,
                type: Sequelize.STRING,
            },
        },
        { createdAt: false, updatedAt: false }
    );
};


