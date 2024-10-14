require("dotenv").config();

module.exports = {
    development: {
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        host: process.env.DB_HOST,
        dialect: "postgres",
        port: process.env.DB_PORT,
    },
};

// default port backend:local = 5432, 3000, 9000, 8000, 8080
// default port frontend:local = 3000, 3001
// server production = 443