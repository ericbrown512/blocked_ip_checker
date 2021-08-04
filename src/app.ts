import express = require("express");
const db = require('./services/db');

const app = express();
const port = process.env.PORT || 3000;

app.get("/", async (req, res) => {

    let ip = req.query.ip;
    try {
        var result = await db.query('SELECT id FROM blocked_ips WHERE ip = ?', [ip]);
        if(result.length > 0) {
            res.json({success: true, found: true});
        }
        res.json({success: true, found: false});
    } catch (err) {
        console.error(`Error while getting quotes `, err.message);

    }

});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});

