//serversignals.js 
const http = require('http');
const PORT = 4400;

const server = http.createServer((req, res) => {
    // Set CORS headers to allow requests from any origin (for development)
    res.setHeader('Access-Control-Allow-Origin', '*'); 
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'GET' && req.url === '/api/data') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        const data = {
            message: 'A signal was pinged from the command prompt terminal on the computer that hosts FakeChan! All boards with posting functionality will be fully active and usable today.',
        };
        res.end(JSON.stringify(data));
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Not Found');
    }
});

server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});
