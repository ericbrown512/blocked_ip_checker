"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
app.get("/", (req, res) => {
    let ip = req.query.ip;
    res.send(ip);
});
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
function checkIPAddress(ip) {
    return false;
}
//# sourceMappingURL=app.js.map