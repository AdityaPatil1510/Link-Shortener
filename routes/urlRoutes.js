const express = require("express");
const shortid = require("shortid");
const Url = require("../models/Url");

const router = express.Router();

/*Create short URL*/
router.post("/shorten", async (req, res) => {
    const { longUrl } = req.body;

    if (!longUrl) {
        return res.status(400).json({ message: "Long URL is required" });
    }

    try {
        const shortCode = shortid.generate();

        const url = new Url({
        longUrl,
        shortCode
        });

        await url.save();

        return res.status(201).json({
        shortUrl: `${process.env.BASE_URL}/${shortCode}`
        });
    } catch (error) {
        console.error("POST /shorten error:", error.message);
        return res.status(500).json({ message: "Internal server error" });
    }
});

/*Redirect short URL*/
router.get("/:code", async (req, res) => {
    try {
        const url = await Url.findOne({ shortCode: req.params.code });

        if (!url) {
        return res.status(404).json({ message: "URL not found" });
        }

        url.clicks++;
        await url.save();

        return res.redirect(url.longUrl);
    } catch (error) {
        console.error("GET /:code error:", error.message);
        return res.status(500).json({ message: "Internal server error" });
    }
});

module.exports = router;
