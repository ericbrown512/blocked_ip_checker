import express = require("express");
const db = require('./services/db');
const ipInt = require('ip-to-int');

const app = express();
const port = process.env.PORT || 3000;

app.get("/", async (req, res) => {

    let ip = req.query.ip;
    try {
        var ipInt = ipInt(ip).toInt();
        var result = await db.query('SELECT count(id) FROM blocked_ips WHERE ? >= ip_range_start AND ? <= ip_range_end', [ipInt, ipInt]);
        if(result.length > 0) {
            res.json({success: true, found: true});
        }
        res.json({success: true, found: false});
    } catch (err) {
        res.json({success: false, found: false, error: err.message});
        console.error(`Error while checking ip `, err.message);
    }

});

app.listen(port, () => {
    console.log(`IP checker is now listening`);
});

