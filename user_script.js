<!-- Start writing your code here -->
// Example of a simple Node.js API with mssql
const express = require('express');
const sql = require('mssql');
const app = express();
const port = 3000;

// Database configuration
const config = {
    user: 'your_username',
    password: 'your_password',
    server: 'your_sql_server_ip', // or 'localhost'
    database: 'your_database_name',
    options: {
        encrypt: true, // For Azure SQL Database
        trustServerCertificate: true // Change to false for production
    }
};

app.get('/api/items', async (req, res) => {
    try {
        await sql.connect(config);
        const result = await sql.query`SELECT * FROM YourTableName`;
        res.json(result.recordset);
    } catch (err) {
        console.error('SQL error', err);
        res.status(500).send('Error retrieving data');
    } finally {
        sql.close();
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});