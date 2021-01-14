const passport = require("passport");
const { db } = require("../db/index");

function Init(app) {
  app.get("/blogs", async function (request, response) {
    const blogs = await db.models.blogs.findAll({});
    response.status(200).send(blogs);
  });

  app.get("/blogs/:id", async function (request, response) {
    const { id } = request.params;
    const blog = await db.models.blogs.findOne({ where: { id } });
    response.status(200).send(blog);
  });
  //passport.authenticate("jwt", { session: false }),
  app.post(
    "/blogs/",

    async function (request, response) {
      const { body } = request;
      const { blogName, author, blogDescription } = body;

      const createBook = await db.models.blogs.create({
        blogName,
        author,
        blogDescription,
      });

      response.status(201).send(createBook);
    }
  );

  app.delete("/blogs/:id", async function (request, response) {
    const { id } = request.params;
    const blog = await db.models.blogs.findOne({ where: { id } });
    const del = await blog.destroy();
    response.status(200).send({ del });
  });

  app.put("/blogs/:id", async function (request, response) {
    const { id } = request.params;
    const blog = await db.models.blogs.findOne({ where: { id } });

    const { body } = request;
    const { blogName, author, blogDescription } = body;

    blog.blogName = blogName ? blogName : blog.blogName;
    blog.author = author ? author : blog.author;
    blog.blogDescription = blogDescription
      ? blogDescription
      : blog.blogDescription;

    await blog.save();
    response.status(200).send(blog);
  });
}

module.exports = {
  Init,
};
