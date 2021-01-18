const Sequelize = require("sequelize");
const Op = Sequelize.Op;
const { db } = require("../db/index");
function Init(app) {
  app.get("/products", async function (request, response) {
    const products = await db.models.products.findAll({});
    response.status(200).send({ products: products });
  });

  app.post("/products/fetch", async function (request, response) {
    const { page, perPage } = request.body;
    const start = (page - 1) * perPage;
    const end = page * perPage;
    const total_count = await (await db.models.products.findAll({})).length;
    const products = await db.models.products.findAll({
      where: Sequelize.and(
        { id: { [Op.gt]: start } },
        { id: { [Op.lte]: end } }
      ),
    });

    response
      .status(200)
      .send({ products: products, meta: { total_count: total_count } });
  });
  app.post(
    "/products/",

    async function (request, response) {
      const { body } = request;
      const { title, price, isInStock } = body;

      const createProduct = await db.models.products.create({
        title,
        price,
        isInStock,
      });

      response.status(201).send({ products: createProduct });
    }
  );
}
module.exports = {
  Init,
};
