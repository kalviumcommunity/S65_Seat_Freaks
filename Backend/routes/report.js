const express = require("express");
const Report = require("../models/Report");
const router = express.Router();


router.post("/", async (req, res) => {
    try {
        const { reportedBy, seatId, reason } = req.body;
        const newReport = new Report({ reportedBy, seatId, reason });
        await newReport.save();
        res.status(201).json({ message: "Report submitted", report: newReport });
    } catch (error) {
        res.status(500).json({ error: "Report submission failed", details: error.message });
    }
});


router.put("/:id/resolve", async (req, res) => {
    try {
        await Report.findByIdAndUpdate(req.params.id, { status: "Resolved" });
        res.json({ message: "Report resolved" });
    } catch (error) {
        res.status(500).json({ error: "Error resolving report" });
    }
});

module.exports = router;