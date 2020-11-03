# Node-Assessment
/------    This is a blogging app in node     -------/
----------------------------------------------------------------

It consists of two components-->
1)  Controller -->
                (i)    user
                (ii)   blog
                (iii)  bookmark
                (iv)   auth
-----------------------------
2)  DB -->
        * Models ->
                (i)    user
                (ii)   blog
                (iii)  bookmark
-----------------------------------------------------------------
Packages
-----------------------------------------------------------------

Run  `npm init` to initialize node-package-manager

Installed packages using >npm install 'package_name' ---->
- express
- postgres
- sequelize
- jsonwebtoken
- passport
- md5
- passport-jwt
-----------------------------------------------------------------
Process
-----------------------------------------------------------------

- Run `npm install` to get node_modules
- Start Blog App >npm start

- `post /auth/signup`  registers the user
- `post /AUTH/LOGIN` login using jwt
- `post blogs/`  create a blog for logged in user
- `get /blogs`  get list of blogs for user from all the other users
- `get /blogs/id`  get specific blog for user
- `put /blogs/id`  user can update it's own blog
- `delete /blogs/id` user can delete his own blog
---------------------------------------------------------------------------
Environment
----------------------------------------------------------------------------

- set environment variable as shown in env_example file.




