const express = require("express");
const passport = require("passport");
const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJWT = require("passport-jwt").ExtractJwt;

//  all controlling functions
const blogController = require("./controller/blogs");
const userController = require("./controller/users");
const authController = require("./controller/auth");

const dataBase = require("./db/index");     // database connection file
const SECRET_KEY =  require("./utility");

// Strategy options for new JWT Stategy
const strategyOptions = {
    jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
    secretOrKey: SECRET_KEY,
};

const PORT = 8100;
const app = express();

// middlewares
app.use(express.json());
app.use(express.urlencoded());
app.use(passport.initialize());

passport.use(
    new JwtStrategy(strategyOptions, async function (payload, done) {
        const user = await dataBase.db.models.users.findOne({ id: payload.id });

        if (!user) {
            done(null, false);
        }
        done(null, extractUser(user));
    })
);

// initialize controllers
blogController.Init(app);
userController.Init(app);
authController.Init(app);

dataBase.init().then(console.log).catch(console.log);

app.listen(PORT, function () {
    console.log(`Your Blogging App is running on port : ${PORT}`);
});
