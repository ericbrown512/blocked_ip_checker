import express = require("express");

const app = express();
const port = 3000;

app.get("/", (req, res) => {

    let ip = req.query.ip;
    res.send(ip);

});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});

function checkIPAddress(ip: string): boolean {
    return false;
}
