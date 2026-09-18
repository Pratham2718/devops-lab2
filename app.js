const http = require('http');

const PORT = 3000;

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });

    res.end(`
        <html>
            <head>
                <title>DevOps Lab 2</title>
            </head>
            <body>
                <h1>DevOps Lab 2 - Version 2</h1>
                <h2>Kubernetes Deployment</h2>
                <p>Version 2 is running successfully!</p>
            </body>
        </html>
    `);
});

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
