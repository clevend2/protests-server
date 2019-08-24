
const express = require("express");
const path = require("path");
const app = express();

const config = require("./config.json");

const PORT = config.port;

app.get("/api/protesters", function (req, res) {
    
});

