// server.js
var https = require('https');
var fs = require('fs');

const { createServer } = require('http')
const { parse } = require('url')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()


var options = {
    key: fs.readFileSync('localhost+2-key.pem'),
    cert: fs.readFileSync('localhost+2.pem'),
    // ca: [fs.readFileSync('root.crt')]
};



app.prepare().then(() => {
    https.createServer(options, (req, res) => {
        // handle ....
        const parsedUrl = parse(req.url, true)
        const { pathname, query } = parsedUrl

         handle(req, res, parsedUrl)
    }).listen(3000, err => {
        if (err) throw err
        console.log(`> Ready on localhost:3000`)
    })
})