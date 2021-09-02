module.exports = {
    llave: 'ABC123!#$%&',
    port: process.env.PORT || 3000,
    env: process.env.NODE_ENV || "development",
  
    // Environment-dependent settings
    development: {
      db: {
        dialect: "sqlite",
        storage: ":memory:"
      }
    },
    test: {
      db: {
        dialect: "sqlite",
        storage: ":memory:"
      }
    },
    production: {
      db: {
        dialect: "sqlite",
        storage: "db/database.sqlite"
      }
    }
  };