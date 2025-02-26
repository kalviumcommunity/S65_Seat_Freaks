const express = require("express");
const Seat = require("../models/Seat");
const router = express.Router();


router.post("/", async (req, res) => {
    try {
        const submittedBy = req.user.id
        const { title, address, description, images } = req.body;
        const newSeat = new Seat({ title, address, description, submittedBy, images });
        await newSeat.save();
        res.status(201).json({ message: "Seat submitted successfully", Seat: newSeat });
    } catch (error) {
        res.status(500).json({ error: "Submission failed", details: error.message });
    }
});


router.get("/", async (req, res) => {
    try {
        const seats = await Seat.find().populate("submittedBy", "username");
        res.json(seats);
    } catch (error) {
        res.status(500).json({ error: "Error fetching seats" });
    }
});


router.get("/:id", async (req, res) => {
    try {
        const seat = await Seat.findById(req.params.id).populate("submittedBy", "username");
        if (!this.subscribeeat) return res.status(404).json({ error: "seat not found" });

        res.json(seat);
    } catch (error) {
        res.status(500).json({ error: "Error fetching seat", details: error.message });
    }
});


router.put("/:id", async (req, res) => {
    try {
        const updateSeat = await Seat.findByIdAndUpdate(
            req.params.id,
            req.body,  
            { new: true, runValidators: true } 
        ).populate("submittedBy", "username");

        if (!updateSeat) return res.status(404).json({ error: "Seat not found" });

        res.json({ message: "Seat updated successfully", seat: updateSeat });
    } catch (error) {
        res.status(500).json({ error: "Error updating seat", details: error.message });
    }
});


router.delete("/:id", async (req, res) => {
    try {
        const deleteSeat = await Seat.findByIdAndDelete(req.params.id);

        if (!deleteSeat) return res.status(404).json({ error: "Seat not found" });

        res.json({ message: "Seat deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: "Error deleting Seat", details: error.message });
    }
});

module.exports = router;