"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
var mysql = require('mysql');
var pool = mysql.createPool({
    connectionLimit: 10,
    host: 'db-blocked-ips.cnws0qrfgqmq.us-east-2.rds.amazonaws.com',
    user: 'admin',
    password: 'password123',
    database: 'sys'
});
app.get("/", (req, res) => {
    let ip = req.query.ip;
    pool.query('SELECT id FROM sys.blocked_ips WHERE `ip` = ?', ip, function (error, results, fields) {
        if (error)
            throw error;
        if (results.length > 0) {
            res.send(1);
        }
        else {
            res.send(0);
        }
    });
});
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
function checkIPAddress(ip) {
    return false;
}
//# sourceMappingURL=app.js.map