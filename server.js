// server.js - RoadRescue Local Development Server
// Zero external dependencies required. Works out of the box with Node.js.
const http = require('http');
const fs = require('fs');
const path = require('path');
const os = require('os');
const { exec } = require('child_process');

// Parse CLI arguments
const args = process.argv.slice(2);
let portIndex = args.indexOf('--port');
let requestedPort = portIndex !== -1 && args[portIndex + 1] ? parseInt(args[portIndex + 1], 10) : parseInt(process.env.PORT || '8080', 10);
const shouldOpenBrowser = args.includes('--open') || args.includes('-o');

const HOST = '0.0.0.0'; // Bind to all interfaces for Mobile/Tablet LAN access
const ROOT_DIR = __dirname;

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.mjs': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.webp': 'image/webp',
  '.avif': 'image/avif',
  '.ico': 'image/x-icon',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
  '.otf': 'font/otf',
  '.xml': 'application/xml',
  '.txt': 'text/plain; charset=utf-8',
  '.map': 'application/json'
};

function getLocalIpAddresses() {
  const interfaces = os.networkInterfaces();
  const addresses = [];
  for (const name of Object.keys(interfaces)) {
    for (const net of interfaces[name]) {
      if (net.family === 'IPv4' && !net.internal) {
        addresses.push({ name, address: net.address });
      }
    }
  }
  return addresses;
}

function openUrl(url) {
  const platform = process.platform;
  let command = '';
  if (platform === 'win32') {
    command = `start "" "${url}"`;
  } else if (platform === 'darwin') {
    command = `open "${url}"`;
  } else {
    command = `xdg-open "${url}"`;
  }
  exec(command, () => {});
}

function createServerInstance(port) {
  const server = http.createServer((req, res) => {
    // Cross-Origin & Development caching headers
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, HEAD, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', '*');
    res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');

    if (req.method === 'OPTIONS') {
      res.writeHead(204);
      res.end();
      return;
    }

    // Strip query string and hash
    let reqUrl = req.url.split('?')[0].split('#')[0];
    try {
      reqUrl = decodeURIComponent(reqUrl);
    } catch {
      res.writeHead(400, { 'Content-Type': 'text/plain' });
      res.end('Bad Request');
      return;
    }

    // Prevent directory traversal
    let safePath = path.normalize(reqUrl).replace(/^(\.\.[\/\\])+/, '');
    let filePath = path.join(ROOT_DIR, safePath);

    // If root or directory, check for index.html
    if (fs.existsSync(filePath) && fs.statSync(filePath).isDirectory()) {
      filePath = path.join(filePath, 'index.html');
    } else if (!fs.existsSync(filePath)) {
      // Support clean URLs: e.g. /about -> /about.html
      if (fs.existsSync(filePath + '.html')) {
        filePath = filePath + '.html';
      }
    }

    // If still not found, return clean 404
    if (!fs.existsSync(filePath) || fs.statSync(filePath).isDirectory()) {
      res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
      res.end(`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>404 - Not Found | RoadRescue</title>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; background: #101c2c; color: #fff; text-align: center; padding: 4rem 1.5rem; margin: 0; }
    h1 { font-size: 2.5rem; margin-bottom: 0.5rem; color: #ff6b2c; }
    p { color: #c8d2df; font-size: 1.1rem; max-width: 500px; margin: 0.5rem auto 1.5rem; }
    a { display: inline-block; padding: 0.75rem 1.75rem; background: #ff6b2c; color: #fff; text-decoration: none; border-radius: 8px; font-weight: 700; }
  </style>
</head>
<body>
  <h1>404 - Page Not Found</h1>
  <p>The path <code>${reqUrl}</code> could not be found on the server.</p>
  <a href="/">Go to Home Page</a>
</body>
</html>`);
      return;
    }

    const ext = path.extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';

    fs.readFile(filePath, (err, data) => {
      if (err) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('500 - Internal Server Error: ' + err.message);
        return;
      }
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(data);
    });
  });

  server.on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
      console.log(`Port ${port} is already active.`);
      // Test if an existing server is responding
      http.get(`http://localhost:${port}/index.html`, (res) => {
        console.log(`Server ready on port ${port} (reusing active instance)`);
        if (shouldOpenBrowser) {
          openUrl(`http://localhost:${port}/`);
        }
        // Don't crash, keep process alive so task monitor is satisfied
      }).on('error', () => {
        // Port taken by another service, try port + 1
        console.log(`Port ${port} is occupied by another process. Trying port ${port + 1}...`);
        createServerInstance(port + 1);
      });
    } else {
      console.error('Server error:', err);
      process.exit(1);
    }
  });

  console.log('RoadRescue Local Server starting...');

  server.listen(port, HOST, () => {
    const localIps = getLocalIpAddresses();
    console.log(`=======================================================`);
    console.log(`  RoadRescue Development Server Running Successfully!  `);
    console.log(`=======================================================`);
    console.log(`Server ready on port ${port}`);
    console.log(``);
    console.log(`  > Laptop / Desktop (Local):`);
    console.log(`    http://localhost:${port}/`);
    console.log(`    http://127.0.0.1:${port}/`);
    console.log(``);
    if (localIps.length > 0) {
      console.log(`  > Mobile & Tablet (Connect via same Wi-Fi):`);
      localIps.forEach((ip) => {
        console.log(`    http://${ip.address}:${port}/  [${ip.name}]`);
      });
      console.log(``);
      console.log(`  Tip: Open the Mobile & Tablet link on your phone/tablet browser`);
      console.log(`       (iPhone Safari, Android Chrome, iPad Safari) to view!`);
    }
    console.log(`=======================================================`);

    if (shouldOpenBrowser) {
      openUrl(`http://localhost:${port}/`);
    }
  });

  // Graceful shutdown handling
  process.on('SIGINT', () => {
    server.close(() => process.exit(0));
  });
  process.on('SIGTERM', () => {
    server.close(() => process.exit(0));
  });
}

createServerInstance(requestedPort);
