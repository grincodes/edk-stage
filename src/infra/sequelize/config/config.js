require("dotenv").config()
const Sequelize = require("sequelize")

const { EDEKEE_DB_USER, EDEKEE_DB_PASS, EDEKEE_DB_HOST, EDEKEE_DB_DEV_DB_NAME, EDEKEE_DB_TEST_DB_NAME, EDEKEE_DB_PROD_DB_NAME, NODE_ENV } = process.env

const databaseCredentials = {
  development: {
    username: EDEKEE_DB_USER,
    password: EDEKEE_DB_PASS,
    database: EDEKEE_DB_DEV_DB_NAME,
    host: EDEKEE_DB_HOST,
    dialect: "mysql"
  },
  test: {
    username: EDEKEE_DB_USER,
    password: EDEKEE_DB_PASS,
    database: EDEKEE_DB_TEST_DB_NAME,
    host: EDEKEE_DB_HOST,
    dialect: "mysql"
  },
  production: {
    username: EDEKEE_DB_USER,
    password: EDEKEE_DB_PASS,
    database: EDEKEE_DB_PROD_DB_NAME,
    host: EDEKEE_DB_HOST,
    dialect: "mysql"
  }
}

const { username, password, database, host, dialect } = databaseCredentials[NODE_ENV]

module.exports = databaseCredentials

module.exports.connection = new Sequelize(database, username, password, {
  host,
  dialect,
  port: 3306,
  dialectOptions: {
    multipleStatements: true
  },
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  },
  logging: false
})
