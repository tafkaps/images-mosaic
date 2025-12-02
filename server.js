const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');

const PORT = 8000;

const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);
    const pathname = parsedUrl.pathname;

    // CORS-Header setzen
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    // OPTIONS-Request behandeln
    if (req.method === 'OPTIONS') {
        res.writeHead(200);
        res.end();
        return;
    }

    // API-Endpoint für Bilder
    if (pathname === '/api/images') {
        const imgDir = path.join(__dirname, 'img');
        
        fs.readdir(imgDir, (err, files) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ error: 'Fehler beim Lesen des Ordners' }));
                return;
            }

            // Filtere nur Bilddateien
            const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp'];
            const images = files
                .filter(file => {
                    const ext = path.extname(file).toLowerCase();
                    return imageExtensions.includes(ext);
                })
                .sort();

            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(images));
        });
        return;
    }

    // Serviere statische Dateien
    let filePath = pathname === '/' ? 'index.html' : decodeURIComponent(pathname.slice(1));
    const fullPath = path.join(__dirname, filePath);

    // Sicherheit: Verhindere Directory Traversal
    if (!fullPath.startsWith(__dirname)) {
        res.writeHead(403);
        res.end('Forbidden');
        return;
    }

    fs.readFile(fullPath, (err, data) => {
        if (err) {
            res.writeHead(404);
            res.end('404 Not Found');
            return;
        }

        // Content-Type bestimmen
        const ext = path.extname(filePath);
        let contentType = 'text/plain';
        
        if (ext === '.html') contentType = 'text/html';
        else if (ext === '.css') contentType = 'text/css';
        else if (ext === '.js') contentType = 'application/javascript';
        else if (ext === '.json') contentType = 'application/json';
        else if (ext === '.jpg' || ext === '.jpeg') contentType = 'image/jpeg';
        else if (ext === '.png') contentType = 'image/png';
        else if (ext === '.gif') contentType = 'image/gif';
        else if (ext === '.webp') contentType = 'image/webp';

        res.writeHead(200, { 'Content-Type': contentType });
        res.end(data);
    });
});

server.listen(PORT, () => {
    console.log(`Server läuft auf http://localhost:${PORT}`);
});
