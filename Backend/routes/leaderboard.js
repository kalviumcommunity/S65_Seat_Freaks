const express = require("express");
const Leaderboard = require("../models/Leaderboard");
const router = express.Router();


router.get("/", async (req, res) => {
    try {
        const leaders = await Leaderboard.find().sort({ points: -1 }).limit(10).populate("userId", "username");
        res.json(leaders);
    } catch (error) {
        res.status(500).json({ error: "Error fetching leaderboard" });
    }
});

module.exports = router;
