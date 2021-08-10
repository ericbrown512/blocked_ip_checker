"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const db = require('./services/db');
const ipInt = require('ip-to-int');
const app = express();
const port = process.env.PORT || 3000;
app.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let ip = req.query.ip;
    try {
        console.log(ip);
        //Convert ip address to an integer
        var ipNum = ipInt(ip).toInt();
        console.log(ipNum);
        //Check if the integer is in any ip ranges we have listed
        var result = yield db.query('SELECT id FROM blocked_ips WHERE ? >= ip_range_start AND ? <= ip_range_end', [ipNum, ipNum]);
        if (result.length > 0) {
            res.json({ success: true, found: true });
        }
        else {
            res.json({ success: true, found: false });
        }
    }
    catch (err) {
        res.json({ success: false, found: false, error: err.message });
        console.error(`Error while checking ip `, err.message);
    }
}));
app.listen(port, () => {
    console.log(`IP checker is now listening`);
});
//# sourceMappingURL=app.js.map