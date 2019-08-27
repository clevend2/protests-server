
const express = require("express");
const path = require("path");
const app = express();

const config = require("./config.json");

const PORT = config.port;

// Define middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Displays all the protestors
app.get("/api/protesters", function (req, res) {
    return res.json(protesters);
});

// Start the server
// ==============================================
app.listen(PORT, function() {
    console.log(`API Server now listening on PORT ${PORT}!`);
})