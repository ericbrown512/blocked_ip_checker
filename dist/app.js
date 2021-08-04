"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const NodeGit = require("nodegit");
const pathToRepo = require("path").resolve("../nodegit");
NodeGit.Clone("https://github.com/firehol/blocklist-ipsets.git", "firehol").then((repository) => {
    console.log(JSON.stringify(repository));
});
// NodeGit.Repository.open(pathToRepo).then((successfulResult) => {
//
//     console.log("Success: " + JSON.stringify(successfulResult));
//
// }, (reasonForFailure) => {
//
//     console.log("Failed: " + JSON.stringify(reasonForFailure));
//
// });
//# sourceMappingURL=app.js.map