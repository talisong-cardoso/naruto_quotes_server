const express = require('express');
const router = express.Router();

const quotes = require("../narutoQuotes.json");

router.get("/all", (req, res) => {
    res.send(JSON.stringify(quotes));
});

router.get("/speaker/:name", (req, res) => {
    const speaker = req.params.name;
    console.log(speaker);
    res.send(JSON.stringify(getQuotePerSpeaker(speaker)));
});

router.get("/random", (req, res) => {
    const randomQuote = quotes[getRandomInt(quotes.length)];
    res.send(randomQuote);
});

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.round(max));
}

function getQuotePerSpeaker(speaker) {
    const quote = quotes.filter(q => q.speaker === speaker && q);
    if (quote) {
        return quote;
    } else {
        return quotes[getRandomInt(quotes.length)];
    }
}

module.exports = router;