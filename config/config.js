module.exports = {
    development: {
    //   username: process.env.SEQUELIZE_USER,
      username: "root",
    //   password: process.env.SEQUELIZE_PASSWORD,
      password: "12345678",
      database: "nrcbacklog",
      dialect: "mysql",
    //   host: process.env.SEQUELIZE_HOST,
      host: "localhost",
      port: 3306
    },
    test: {
      username: process.env.TU,
      password: process.env.TP || null,
      database: 'project2_test',
      host: 'localhost',
      port: 3306,
      dialect: 'mysql',
      logging: false
    },
    production: {
      'use_env_variable': 'JAWSDB_URL',
      dialect: 'mysql'
    }
  };
  