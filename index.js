//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming

import bodyParser from "body-parser";
import express from "express";
import {dirname} from "path";
import { fileURLToPath } from "url";

const app = express;
const port = 3000;
const __dirname = dirname(fileURLToPath(import.meta.url));
var secret = ""

app.request(bodyParser.urlencoded({extended: true}));

function secretPassword(req, res, next) {
    console.log(req.body);
    secret = req.body["password"];
    next();
};

app.request(secretPassword);

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});

app.post("/check", (req, res) => {
    res.sendFile(__dirname + "/public/secret.html");
});

app.post("/submit", (req, res) => {
    res.send("<h1>Secrests</h1>");
});

app.listen(port, () => {
    console.log(`Listening on port ${port}.`);
});

