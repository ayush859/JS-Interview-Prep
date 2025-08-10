const express = require("express");

const Products_Router = express.Router();

Products_Router.get("/", (req, res) => {
    res.send("We are on PRODUCTS HOME PAGE");
});

Products_Router.get("/features", (req, res) => {
    res.send("We are on PRODUCTS FEATURES PAGE");
});

Products_Router.get("/rating", (req, res) => {
    res.send("We are on PRODUCTS RATING PAGE");
});

module.exports = Products_Router;
