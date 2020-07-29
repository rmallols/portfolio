const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3006;

module.exports = { start, stop };

function start() {
    return new Promise(resolve => {
        app.use(express.static(path.join(__dirname, '../build')));
        app.get('*', function (req, res) {
            res.sendFile(path.join(__dirname, '../build/index.html'));
        });
        const server = app.listen(port, () => {
            console.log(`Example app listening at http://localhost:${port}`);
            resolve(server);
        });
    });
}

function stop(server) {
    return server.close();
}