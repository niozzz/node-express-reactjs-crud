import { Sequelize } from "sequelize";

const db = new Sequelize("db_crud_react", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

export default db;
