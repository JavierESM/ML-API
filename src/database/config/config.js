require('dotenv').config();

module.exports = {
  "development": {
    "username": "root",
    "password": "root",
    "database": "mercadoliebre",
    "host": "127.0.0.1",
    "dialect": "mysql",
    "operatorsAliases": 0,
    "define": {
      // https://sequelize.org/master/manual/naming-strategies.html
      // "underscored": true,
      "paranoid": true
    }
  },
  "test": {
    "username": "root",
    "password": "root",
    "database": "mercadoliebre",
    "host": "127.0.0.1",
    "dialect": "mysql",
    "operatorsAliases": 0
  },
  "production": {
    "username": "root",
    "password": "root",
    "database": "mercadoliebre",
    "host": "127.0.0.1",
    "dialect": "mysql",
    "operatorsAliases": 0
  }
}
