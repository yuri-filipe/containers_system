require("dotenv").config();

const host = process.env.DB_HOST;
const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;
const database = process.env.DB_DATABASE;
const dialect = process.env.DB_DIALECT;

module.exports = {
  dialect,
  host,
  username,
  password,
  database,
  define: {
    timestamps: true,
    underscored: true,
  },
};
