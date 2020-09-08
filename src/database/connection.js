const { Pool } = require('pg')

let pool;


if(process.env.MODE !== "HEROKU") {
    // BASIC CONNECTION
    pool = new Pool({
        user: 'postgres',
        host: 'localhost',
        database: 'postgres',
        password: 'postgres',
        port: 5432,
    });
}
else {
    // SSL
    pool = new Pool({
        connectionString: process.env.DATABASE_URL,
        ssl: {
            rejectUnauthorized: false
        }
    });
}

module.exports = {
    pool,
}
