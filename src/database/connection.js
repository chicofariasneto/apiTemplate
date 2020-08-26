const { Pool } = require('pg')

let pool;

if(process.env.LOCAL) {
    // Local
    pool = new Pool({
        user: 'postgres',
        host: 'localhost',
        database: 'postgres',
        password: 'postgres',
        port: 5432,
    });
}
else {
    // Heroku
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
