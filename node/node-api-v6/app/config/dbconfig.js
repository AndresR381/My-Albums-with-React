const mysql = require("mysql2")

const pool = mysql.createPool ({
    connectionLimit: 10, 
    host: "localhost",
    user: "root",
    password: "rootroot",
    database: "album24"
})

module.exports = pool