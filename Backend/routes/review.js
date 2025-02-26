const express = require("express");
const Review = require("../models/Review");
const router = express.Router();


router.post("/", async (req, res) => {
    try {
        const userId = req.user.id
        const { seatId, rating, commentText } = req.body;
        const newReview = new Review({ seatId, userId, rating, commentText });
        await newReview.save();
        res.status(201).json({ message: "Review added", review: newReview });
    } catch (error) {
        res.status(500).json({ error: "Review submission failed", details: error.message });
    }
});


router.get("/:seatId", async (req, res) => {
    try {
        const reviews = await Review.find({ seatId: req.params.seatId }).populate("userId", "username");
        res.json(reviews);
    } catch (error) {
        res.status(500).json({ error: "Error fetching reviews" });
    }
});

module.exports = router;