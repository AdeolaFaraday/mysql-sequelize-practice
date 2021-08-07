const { Sequelize } = require("sequelize");
const { config } = require("./config");

const sequelize = new Sequelize("node_complete", "root", config.DB_PASS, {
  dialect: "mysql",
  host: "localhost",
  port: 3306,
});

module.exports = sequelize;
