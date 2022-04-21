require('dotenv').config()
module.exports = {
  
    development: {
      database: "foodle_development",
      dialect: "postgres",
      password: "FuckyouCovid19!"
    },
    test: {
      database: "foodle_test",
      dialect: "postgres"
    },
    production: {
      use_env_variable: "DATABASE_URL",
      dialect: "postgres",
      dialectOptions: {
        ssl: {
          rejectUnauthorized: false,
          require: true
        }
      }
    }
    
}
