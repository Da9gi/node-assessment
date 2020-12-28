const express = require("express");
const passport = require("passport");
const JwtStrategy = require("passport-jwt").Strategy;
const extractJWT = require("passport-jwt").ExtractJwt;

//  all controlling functions
const blogController = require("./controller/blogs");
const userController = require("./controller/users");
const authController = require("./controller/auth");

const { init, users } = require("./db/index"); // database connection file
const { SECRET_KEY, extractUser } = require("./utility");

// Strategy options for new JWT Stategy
const strategyOptions = {
    jwtFromRequest: extractJWT.fromAuthHeaderAsBearerToken(),
    secretOrKey: SECRET_KEY,
};

const PORT = 8100;
const app = express();

init().then(console.log).catch(console.log);

passport.use(
    new JwtStrategy(strategyOptions, async function (payload, done) {
        const user = await users.findOne({where : { id: payload.id }});

        if (!user) {
            done(null, false);
        }
        done(null, extractUser(user));
    })
);

// middlewares
app.use(express.json());
app.use(express.urlencoded());
app.use(passport.initialize());

// initialize controllers
blogController.Init(app);
userController.Init(app);
authController.Init(app);

app.listen(PORT, function () {
    console.log(`Your Blogging App is running on port : ${PORT}`);
});
