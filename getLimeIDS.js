<!-- Start writing your code here -->
// server.js (Node.js example)
const express = require('express');
const sql = require('mssql');
const app = express();
const port = 1433;

// SQL Server configuration
const config = {
    user: 'your_username',
    password: 'your_password',
    server: '5.161.68.219', // e.g., 'localhost' or an IP address
    database: 'your_database_name',
    options: {
        encrypt: true, // For Azure SQL Database
        trustServerCertificate: true // Change to false for production
    }
};

app.use(express.static('public')); // Serve static files from a 'public' directory

app.get('/api/data', async (req, res) => {
    try {
        await sql.connect(config);
        const result = await sql.query`SELECT * FROM YourTable`; // Your SQL query here
        res.json(result.recordset);
    } catch (err) {
        console.error('SQL error', err);
        res.status(500).send('Database error');
    } finally {
        sql.close();
    }
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});