// Node.js core modules
const http = require('http');
const fs = require('fs');

// IP address
const hostname = '127.0.0.1';

const port = 3000;

fs.readFile('index.html', (err, html) => {
  if (err) {
    throw err;
  }

  const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-type', 'text/html');
    res.write(html);
    res.end();
  });

  // Creates a listener on the specified port or path (see https://www.w3schools.com/nodejs/met_server_listen.asp)
  server.listen(port, hostname, () => {
    console.log(`Server started on port ${port}`);
  });
});

